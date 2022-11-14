//объявляем через перечесление enum все маршруты в Web-приложении
export enum AppRoute{
    Login = '/login',
    Root = '/',
    Room = ':id',
    Offers = '/offer'
}

export const ratings: number[] = [5, 4, 3, 2, 1];
