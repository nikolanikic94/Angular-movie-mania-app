export class Movie {
  private _id: number;
  private name: string;
  private description: string;
  private director: string;
  private genre: string;
  private year: number;
  private rating: string;
  private duration: string;

  constructor(obj?: any) {
    this._id = (obj && obj._id) || null;
    this.name = (obj && obj.name) || '';
    this.description = (obj && obj.description) || '';
    this.director = (obj && obj.director) || '';
    this.genre = (obj && obj.genre) || '';
    this.year = (obj && obj.year) || '';
    this.rating = (obj && obj.rating) || '';
    this.duration = (obj && obj.duration) || '';
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter $name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Getter $description
   * @return {string}
   */
  public get $description(): string {
    return this.description;
  }

  /**
   * Getter $director
   * @return {string}
   */
  public get $director(): string {
    return this.director;
  }

  /**
   * Getter $genre
   * @return {string}
   */
  public get $genre(): string {
    return this.genre;
  }

  /**
   * Getter $year
   * @return {number}
   */
  public get $year(): number {
    return this.year;
  }

  /**
   * Getter $rating
   * @return {string}
   */
  public get $rating(): string {
    return this.rating;
  }

  /**
   * Getter $duration
   * @return {string}
   */
  public get $duration(): string {
    return this.duration;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter $name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }

  /**
   * Setter $description
   * @param {string} value
   */
  public set $description(value: string) {
    this.description = value;
  }

  /**
   * Setter $director
   * @param {string} value
   */
  public set $director(value: string) {
    this.director = value;
  }

  /**
   * Setter $genre
   * @param {string} value
   */
  public set $genre(value: string) {
    this.genre = value;
  }

  /**
   * Setter $year
   * @param {number} value
   */
  public set $year(value: number) {
    this.year = value;
  }

  /**
   * Setter $rating
   * @param {string} value
   */
  public set $rating(value: string) {
    this.rating = value;
  }

  /**
   * Setter $duration
   * @param {string} value
   */
  public set $duration(value: string) {
    this.duration = value;
  }
}
