export class Comment {
    constructor(builder) {
        this._id = builder._id;
        this.name = builder.name;
        this.email = builder.email;
        this.movie_id = builder.movie_id;
        this.text = builder.text;
        this.date = builder.date;
    }

    static get Builder() {
        class Builder {
            constructor() {
                this._id = '';
                this.name = '';
                this.email = '';
                this.movie_id = '';
                this.text = '';
                this.date = new Date();
            }

            setId(id) {
                this._id = id;
                return this;
            }

            setName(name) {
                this.name = name;
                return this;
            }

            setEmail(email) {
                this.email = email;
                return this;
            }

            setMovieId(movie_id) {
                this.movie_id = movie_id;
                return this;
            }

            setText(text) {
                this.text = text;
                return this;
            }

            setDate(date) {
                this.date = date;
                return this;
            }

            build() {
                return new Comment(this);
            }
        }
        return Builder;
    }
}
