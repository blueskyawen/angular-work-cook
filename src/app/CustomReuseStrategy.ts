import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {

    public static handlers: { [key: string]: DetachedRouteHandle } = {};
    public static currRouteConfig: any;

    public static deleteRouteSnapshot(path: string): void {
        const name = path.replace(/\//g, '_');
        if (CustomReuseStrategy.handlers[name]) {
            delete CustomReuseStrategy.handlers[name];
        }
    }

    public static clear(): void {
        for (let key in CustomReuseStrategy.handlers) {
            delete CustomReuseStrategy.handlers[key];
        }
    }

    /** 当路由离开时会触发,表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断 */
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        console.debug('shouldDetach======>', route);
        if (!route.data.keep) {
            return false;
        }
        return true;
    }

    /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        console.debug('store======>', route, handle);
        CustomReuseStrategy.handlers[this.getRouteUrl(route)] = handle;
    }

    /** 若 path 在缓存中有的都认为允许还原路由 */
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        console.debug('shouldAttach======>', route);
        const diffUrl = this.getDiffRouteUrl(this.getRouteUrl(route));
        return !!CustomReuseStrategy.handlers[diffUrl];
    }

    /** 从缓存中获取快照，若无则返回nul */
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        console.debug('retrieve======>', route);
        const diffUrl = this.getDiffRouteUrl(this.getRouteUrl(route));
        if (!CustomReuseStrategy.handlers[diffUrl]) {
            return null;
        }

        return CustomReuseStrategy.handlers[diffUrl];
    }

    /** 进入路由触发，判断是否同一路由 */
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        console.debug('shouldReuseRoute======>');
        if (future.routeConfig === curr.routeConfig &&
            JSON.stringify(future.params) === JSON.stringify(curr.params)) {
            return true;
        } else {
            CustomReuseStrategy.currRouteConfig =curr.routeConfig;
            return false;
        }
    }

    /** 使用route的path作为快照的key */
    getRouteUrl(route: ActivatedRouteSnapshot) {
        const path = route['_routerState'].url.replace(/\//g, '_');
        return path;
    }

    getDiffRouteUrl(path: any) {
        if (CustomReuseStrategy.currRouteConfig && CustomReuseStrategy.currRouteConfig.children) {
            for (let child of CustomReuseStrategy.currRouteConfig.children) {
                if (path.lastIndexOf(child.path) !== -1) {
                    return path.slice(0, path.lastIndexOf(`_${child.path}`));
                }
            }
            return path;
        } else {
            return path;
        }
    }

}
