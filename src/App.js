// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import Movie from './Movie';

// // const moviesTitles = [
// //   "캡틴아메리카 퍼스트어벤져",
// //   "아이언맨",
// //   "토르 천둥의신",
// //   "스파이더맨 홈커밍"
// // ]

// // const movieimage = [
// //   "https://t1.daumcdn.net/cfile/tistory/2170994A53C3A98103",
// //   "http://thumbnail.egloos.net/600x0/http://pds27.egloos.com/pds/201804/20/59/c0225259_5ad995f0aa663.jpg",
// //   "https://t1.daumcdn.net/cfile/tistory/1166BE564DBBFECC27",
// //   "https://steemitimages.com/p/MvwLKy3SfvJwXFKCRMDAFrt961WESMBeWhysGNKe6?format=match&mode=fit"
// // ]

// // const movieDiscription = [
// //   "군인아저씨 영화"
// //   , "로봇아저씨 영화"
// //   , "신 아저씨 영화"
// //   , "거미 아저씨 영화"
// // ]

// class App extends Component {
//   // state : 각자가 가지고 있는 값. 컴포넌트 내부에서만 값을 변경할 수 있음.
//   // state = {
//   //   greeting: 'Hello!',
//   //   movies : [
//   //     {
//   //       title: "캡틴아메리카 퍼스트어벤져",
//   //       poster: "https://t1.daumcdn.net/cfile/tistory/2170994A53C3A98103"
//   //     },
//   //     {
//   //       title: "아이언맨",
//   //       poster: "http://thumbnail.egloos.net/600x0/http://pds27.egloos.com/pds/201804/20/59/c0225259_5ad995f0aa663.jpg"
//   //     },
//   //     {
//   //       title: "토르 천둥의신",
//   //       poster: "https://t1.daumcdn.net/cfile/tistory/1166BE564DBBFECC27"
//   //     },
//   //     {
//   //       title: "스파이더맨 홈커밍",
//   //       poster: "https://steemitimages.com/p/MvwLKy3SfvJwXFKCRMDAFrt961WESMBeWhysGNKe6?format=match&mode=fit"
//   //     }
//   //   ]
//   // }
//   // componentDidMount() {
//   //   setTimeout(() => {
//   //     // this.state.greeting = 'something'
//   //     this.setState({
//   //       greeting: 'Hello again!'
//   //     })
//   //   } , 5000)
//   // }

//   state = {
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({   
//         movies: [
//           {
//             title: "캡틴아메리카 퍼스트어벤져",
//             poster: "https://t1.daumcdn.net/cfile/tistory/2170994A53C3A98103"
//           },
//           {
//             title: "아이언맨",
//             poster: "http://thumbnail.egloos.net/600x0/http://pds27.egloos.com/pds/201804/20/59/c0225259_5ad995f0aa663.jpg"
//           },
//           {
//             title: "토르 천둥의신",
//             poster: "https://t1.daumcdn.net/cfile/tistory/1166BE564DBBFECC27"
//           },
//           {
//             title: "스파이더맨 홈커밍",
//             poster: "https://steemitimages.com/p/MvwLKy3SfvJwXFKCRMDAFrt961WESMBeWhysGNKe6?format=match&mode=fit"
//           },
//           {
//             title: "블랙팬서",
//             poster: "https://t1.daumcdn.net/movie/e09f36bdccea7aea57a465c59cd20e2c6a8887e9"
//           }
//         ]
//       })  
//     }, 5000)
//   }

//   // render 후 실행되는 라이프사이클
//   // componentDidMount() {
//   //   setTimeout(() => {
//   //     this.setState({    
//   //       movies: [
//   //         ...this.state.movies, //기존 부분을 남기는 역할
//   //         {
//   //           title: "블랙팬서",
//   //           poster: "https://t1.daumcdn.net/movie/e09f36bdccea7aea57a465c59cd20e2c6a8887e9"
//   //         }
//   //       ]
//   //     })   
//   //   }, 5000) 
//   // } 
  
//   // render() {
//   //   return(
//   //     // <div className="App">
//   //     //   <Movie title={moviesTitles[0]} poster={movieimage[0]} disc={movieDiscription[0]}></Movie>
//   //     //   <Movie title={moviesTitles[1]} poster={movieimage[1]} disc={movieDiscription[1]}></Movie>
//   //     //   <Movie title={moviesTitles[2]} poster={movieimage[2]} disc={movieDiscription[2]}></Movie>
//   //     //   <Movie title={moviesTitles[3]} poster={movieimage[3]} disc={movieDiscription[3]}></Movie>
//   //     // </div>

//   //     <div className="App">
//   //       {this.state.greeting}
//   //       {this.state.movies.map((movie, index) => {
//   //         return <Movie title={movie.title} poster={movie.poster} key={index} />
//   //       })}
//   //     </div>
//   //   );
//   // }

//   _renderMovies = () => {
//     const movies = this.state.movies.map((movie, index) => {
//       return <Movie title={movie.title} poster={movie.poster} key={index} />
//     })
//     return movies
//   } // 리액트 자체기능이 많기 때문에 _를 붙임
//     // = () => 최신 자바스크립트
//     // [<Movie props />, <Movie props />] 정렬된 항목을 보여줌
//   render() {
//     return (
//       <div className="App">
//         {this.state.movies ? this._renderMovies() : '로딩중'} 
//       </div> // 데이터가 있는지 체크
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {}

  // componentDidMount() {
  //   // console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')) //promise가 뜸
  //   fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
  //   //.then(hansol => console.log(hansol))
  //   .then(hansol => hansol.json()) // fetch에서 hansol이 만들어진다. response로 체크하고 
  //   .then(json => console.log(json)) // hansol.json()에서 json이 만들어진다. json으로 변환, 콘솔로 확인
  //   .catch(err => console.log(err)) 
  // } // fetch가 없을 때는 XMLHttpRequest를 사용했음
  
  // fetch() (응답을 반환)
  // .then(hansol => hansol.json()) (json을 반환)
  // .then(json => 무엇이든)

  // consolef로 확인하면 promise가 뜬다.
  // promise는 새로운 자바스크립트 컨셉
  // 비동기 프로그래밍 때문, 시나리오를 잡는 방법을 가르쳐준다. 성공적으로 수행할 수 있고, 그렇지 않을 경우 결과물을 catch, then으로

  // _renderMovies = () => {
  //   const movies = this.state.movies.map((movie, index) => {
  //     return <Movie title={movie.title} poster={movie.poster} key={index} />
  //   }) 
  //   return movies
  // } // 리액트 자체기능이 많기 때문에 _를 붙임
  //   // = () => 최신 자바스크립트 
  //   // [<Movie props />, <Movie props />] 정렬된 항목을 보여줌
    componentDidMount() {
      this._getMovies();
    }

    _renderMovies = () => {
      const movies = this.state.movies.map(movie => {
        console.log(movie)
        return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres}
        synopsis={movie.synopsis}/>
      })
      return movies
    } // 리액트 자체기능이 많기 때문에 _를 붙임
      // = () => 최신 자바스크립트
      // [<Movie props />, <Movie props />] 정렬된 항목을 보여줌

  _getMovies = async () => {
      const movies = await this._callApi() // function callApi를 await 모드로
      this.setState({
        movies
      })
       //'성공적으로 수행'을 기다리는 것이 아니라, '끝나기를' 기다린다. callApi의 return value가 무엇이든. 그 value를 movies에 넣는다.
    } // 순서와 상관없이 작업 진행

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
    } // fetch가 없을 때는 XMLHttpRequest를 사용했음

  // render() {
  //   return (
  //     <div className="App">
  //       {this.state.movies ? this._renderMovies() : '로딩중'}  
  //     </div> // 데이터가 있는지 체크
  //   );
  // }

  render() {
    const { movies } = this.state
    return (
      <div className={movies ? "App" : "App-loading"}>
        {movies ? this._renderMovies() : '로딩중'} 
      </div> // 데이터가 있는지 체크
    );
  }
}

export default App;