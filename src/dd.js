// // import React, { Component } from 'react';
// // import PropTypes from 'prop-types';

// // class Movie extends Component {
// //     // render() {
// //     //     return(
// //     //         <div>
// //     //             <h1>{this.props.title}</h1>
// //     //             <MoviePoster poster={this.props.poster}/>
// //     //             <MovieDiscription disc={this.props.disc}/>
// //     //             {/* <img src={this.props.poster}/> */}

// //     //         </div>
// //     //     );
// //     // }

// //     static PropTypes = {
// //         //isRequired : 필수체크
// //         title: PropTypes.string.isRequired,
// //         poster: PropTypes.string.isRequired
// //     }

// //     //정해져있는 생성자함수
// //     // constructor(props) {
// //     //     //super()를 사용하지 않으면 아래처럼 this.state로 사용이 불가능
// //     //     super(props);
// //     //     this.state = {
// //     //         number: 0
// //     //     }
// //     // }

// //     render() {
// //         console.log(this.props)
// //         return (
// //             <span>
// //                 {/* <img src={this.props.poster}/> */}
// //                 <MoviePoster poster={this.props.poster} />
// //                 <h1>{this.props.title}</h1>
// //                 {/* <p>숫자: {this.state.number}</p>
// //                 <button onClick={() => {
// //                     this.setState({
// //                         number: this.state.number + 1
// //                     })
// //                 }
// //                 }>더하기</button> */}
// //             </span>
// //         )
// //     }
// // }

// // class MoviePoster extends Component {
// //     // render() {
// //     //     return(
// //     //         <img src={this.props.poster} width="300" height="auto"></img>
// //     //     );
// //     // }

// //     static PropTypes = {
// //         poster: PropTypes.string.isRequired
// //     }

// //     render() {
// //         console.log(this.props)
// //         return (
// //             <img src={this.props.poster} alt="Movie Poster" width="300" height="auto" />
// //         )
// //     }
// // }

// // // class MovieDiscription extends Component {
// // //     render() {
// // //         return(
// // //             <p>{this.props.disc}</p>
// // //         );
// // //     }
// // // }

// // export default Movie;


// import React from 'react';
// import PropTypes from 'prop-types';
// // import './Movie.css';


// function Movie({title, poster}){
//    return (
//        <div>
//            <MoviePoster poster={poster} />
//            <h1>{title}</h1>
//        </div>
//    )
// }

// function MoviePoster({poster}){
//    return (
//        <img src={poster} alt="Movie Poster" width="300" height="auto" />   
//    )
// } // return을 하기 위해 존재, component will mount, function, update state등이 필요 없다.
//  // render도 없고 라이프사이클도 없다.

//  Movie.propTypes = {
//    title: PropTypes.string.isRequired,
//    poster: PropTypes.string.isRequired
// }

// MoviePoster.propTypes = {
//    poste: PropTypes.string.isRequired
// }

// export default Movie;


import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>   
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />   
                </div>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes ={
    genre: PropTypes.string.isRequired
}

export default Movie