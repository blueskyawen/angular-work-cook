import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import { Observable, Subject } from 'rxjs';

export class RouteMsg {
    url: string = '';
    type: string = '';
    constructor(type: string, url: string) {
        this.type = type;
        this.url = url;
    }
}

export class AppReuseStrategy implements RouteReuseStrategy {

    public static handlers: { [key: string]: DetachedRouteHandle } = {};
    public static routeText$ = new Subject<RouteMsg>();

    public static deleteRouteSnapshot(path: string): void {
        const name = path.replace(/\//g, '_');
        if (AppReuseStrategy.handlers[name]) {
            delete AppReuseStrategy.handlers[name];
        }
    }

    public static clear(): void {
        for (let key in AppReuseStrategy.handlers) {
            delete AppReuseStrategy.handlers[key];
        }
    }

    public static getRouteText(): Observable<RouteMsg> {
        return AppReuseStrategy.routeText$.asObservable();
    }

    /** 当路由离开时会触发,表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断 */
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        console.debug('shouldDetach======>', route);
        if (!route.data.keep) {
            return false;
        }
        AppReuseStrategy.routeText$.next(new RouteMsg('detach', route['_routerState'].url));
        return true;
    }

    /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        console.debug('store======>', route, handle);
        AppReuseStrategy.handlers[this.getRouteUrl(route)] = handle;
    }

    /** 若 path 在缓存中有的都认为允许还原路由 */
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        console.debug('shouldAttach======>', route);
        console.debug('diffUrl======>', this.getRouteUrl(route));
        return (route.data.keepParent || !route.routeConfig.children && !route.routeConfig.loadChildren) && !!AppReuseStrategy.handlers[this.getRouteUrl(route)];
    }

    /** 从缓存中获取快照，若无则返回nul */
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        console.debug('retrieve======>', route);
        console.debug('diffUrl======>', this.getRouteUrl(route));
        if ((!route.data.keepParent && (route.routeConfig.children || route.routeConfig.loadChildren)) || !AppReuseStrategy.handlers[this.getRouteUrl(route)]) {
            return null;
        }
        AppReuseStrategy.routeText$.next(new RouteMsg('attach', route['_routerState'].url));
        return AppReuseStrategy.handlers[this.getRouteUrl(route)];
    }

    /** 进入路由触发，判断是否同一路由 */
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        console.debug('shouldReuseRoute======>');
        console.debug('future======>', future);
        console.debug('curr======>', curr);
        return (!curr.data.keepParent || !future.data.keepParent) && (future.routeConfig === curr.routeConfig && JSON.stringify(future.params) === JSON.stringify(curr.params));
    }

    /** 使用route的path作为快照的key */
    getRouteUrl(route: ActivatedRouteSnapshot) {
        const path = route['_routerState'].url.replace(/\//g, '_');
        return path;
    }

}
