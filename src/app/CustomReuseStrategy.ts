import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {

    public static handlers: { [key: string]: DetachedRouteHandle } = {};
    public static futureRouteConfig: any;
    public static currRouteConfig: any;

    public static deleteRouteSnapshot(path: string): void {
        const name = path.replace(/\//g, '_');
        if (CustomReuseStrategy.handlers[name]) {
            delete CustomReuseStrategy.handlers[name];
        }
    }

    public static clear(): void {
        for (let key in CustomReuseStrategy.handlers) {
            //delete CustomReuseStrategy.handlers[key];
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
        let aaa = this.getNouseRouteUrl(this.getRouteUrl(route));
        console.debug('aaa======>', aaa);
        return !!CustomReuseStrategy.handlers[this.getNouseRouteUrl(this.getRouteUrl(route))];
    }

    /** 从缓存中获取快照，若无则返回nul */
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        console.debug('retrieve======>', route);
        console.debug('CustomReuseStrategy.futureRouteConfig======>',
            CustomReuseStrategy.futureRouteConfig);
        console.debug('CustomReuseStrategy.currRouteConfig======>',
            CustomReuseStrategy.currRouteConfig);
        let aaa = this.getNouseRouteUrl(this.getRouteUrl(route));
        console.debug('aaa======>', aaa);
        if (!CustomReuseStrategy.handlers[this.getNouseRouteUrl(this.getRouteUrl(route))]) {
            return null;
        }

        return CustomReuseStrategy.handlers[this.getNouseRouteUrl(this.getRouteUrl(route))];
    }

    /** 进入路由触发，判断是否同一路由 */
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        console.debug('shouldReuseRoute======>');
        console.debug('future======>', future);
        console.debug('curr======>', curr);
        if (future.routeConfig === curr.routeConfig &&
            JSON.stringify(future.params) === JSON.stringify(curr.params)) {
            return true;
        } else {
            CustomReuseStrategy.futureRouteConfig =future.routeConfig;
            CustomReuseStrategy.currRouteConfig =curr.routeConfig;
            return false;
        }
    }

    /** 使用route的path作为快照的key */
    getRouteUrl(route: ActivatedRouteSnapshot) {
        const path = route['_routerState'].url.replace(/\//g, '_');
        return path;
    }

    getNouseRouteUrl(path: any) {
        if (CustomReuseStrategy.currRouteConfig) {
            let paths = path.split('_');
            return paths.slice(0, paths.lastIndexOf(CustomReuseStrategy.currRouteConfig.path) + 1).join('_');
        } else {
            return path;
        }
    }

}
