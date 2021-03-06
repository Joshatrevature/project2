import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RawgDataService {

private key = '&key=6d9368c98b03417d9a0cab226f150dc0'

  private ENDPOINTS = {

    GAME_LIST_URL: 'https://rawg.io/api/games?key=6d9368c98b03417d9a0cab226f150dc0&page=1&page_size=5&ordering=-released&stores=11',
    GENRE_LIST_URL: 'https://rawg.io/api/genres?key=6d9368c98b03417d9a0cab226f150dc0&',
    GAME_GENRE_URL: 'https://rawg.io/api/games?genres=',
   
    

    GAME_LIST_DESKTOP_URL: 'https://rawg.io/api/games?key=6d9368c98b03417d9a0cab226f150dc0&page=1&page_size=32',
    GAME_LIST_MOBILE_URL: 'https://rawg.io/api/games?key=6d9368c98b03417d9a0cab226f150dc0&page=1&page_size=4',
    GAME_LIST_TABLET_URL: 'https://rawg.io/api/games?key=6d9368c98b03417d9a0cab226f150dc0&page=1&page_size=12',
    GAME_LIST_LAPTOP_URL: 'https://rawg.io/api/games?key=6d9368c98b03417d9a0cab226f150dc0&page=1&page_size=20',
    NEW_GAMES_URL: 'https://rawg.io/api/games?key=6d9368c98b03417d9a0cab226f150dc0&page=1&page_size=5&ordering=-released&stores=11',

  }

  constructor(private http: HttpClient) { }
  /**
   * 
   * @returns observable of one page of games populated with 20 games
   */
  getGamesDesktopView(): Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.GAME_LIST_DESKTOP_URL);
  }

  getGenres(): Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.GENRE_LIST_URL)
  }

  
  getGamesByGenre(name: string): Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.GAME_GENRE_URL + name + this.key)
    // return this.http.get<any>(this.ENDPOINTS.PUZZLE_URL)
  }
  
  getGamesMobileView(): Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.GAME_LIST_MOBILE_URL);
  }
  getGamesTabletView(): Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.GAME_LIST_TABLET_URL);
  }
  getGamesLaptopView(): Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.GAME_LIST_LAPTOP_URL);
  }
  getNewGames(): Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.NEW_GAMES_URL);
  }


}
