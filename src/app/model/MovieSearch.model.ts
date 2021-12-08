import { Movie } from './Movie.model';

export class MovieSearch {
  private count: number;
  private results: Movie[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results = (obj && obj.results.map((movie) => new Movie(movie))) || [];
  }

  /**
   * Getter $count
   * @return {number}
   */
  public get $count(): number {
    return this.count;
  }

  /**
   * Getter $results
   * @return {Movie[]}
   */
  public get $results(): Movie[] {
    return this.results;
  }

  /**
   * Setter $count
   * @param {number} value
   */
  public set $count(value: number) {
    this.count = value;
  }
}
