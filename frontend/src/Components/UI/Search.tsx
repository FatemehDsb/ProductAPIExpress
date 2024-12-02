// import { FormEvent, useRef } from "react";

//  type SearchProps ={
//     onSearch: (criteria: string)=> void;
//  }

//  const Search = ({onSearch}: SearchProps) => {
//     const query = useRef<HTMLInputElement>(null);

//     const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
//         e.preventDefault();
//         const searchValue = query.current!.value;
//         onSearch(searchValue)
//     }

//   return (
//     <section>
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <input type="text" placeholder="Search here!"/>
//                 <i> </i>
//             </div>


//         </form>

//     </section>
//   )
// }
// export default Search

