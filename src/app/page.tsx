// "use client"
// import { useRouter } from 'next/navigation'


export default function Home() {

  // const router = useRouter();

  // Navigating after a button click

  // const handleClick = ()=>{
  //   router.push('/About')
  // };
 

  // Navigate with query Parameters

  // const goToPost = () => {
  //   router.push(`/About?id=123`);
  // }


  // Using Dynamic Routes
  // const router = useRouter();
  // const {id} = router.query
  



  return (
    <>

    <h1>Welcome to the Home Page</h1>

    {/* <button onClick={goToPost}>Go to About Page</button> */}
    </>
  );
}



// "use client"
// import { useParams } from 'next/navigation'

// export default function Home() {
//   const { id } = useParams();

//   return (
//     <>
//       <h1>Welcome to the Home Page</h1>
//       <h2>Post ID: {id}</h2>
//     </>
//   );
// }
