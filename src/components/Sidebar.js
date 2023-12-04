import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Sidebar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

    
  return (
    <div className='bg-slate-500 mx-2 text-white col-span-1 w-80'>
      <div className='flex px-10 p-3'>
       <img 
       className='h-10 w-10'
       alt='hlogo'
       src='https://static.thenounproject.com/png/423483-200.png' />
       <h1 className='mx-5'><Link to="/">Home</Link></h1>
       </div>
       <div className='flex px-10 p-3 '>
       <img 
       className='h-10 w-10'
       alt='hlogo'
       src='https://logowik.com/content/uploads/images/youtube-shorts5863.jpg' />
       <h1 className='mx-5'>Shorts</h1>
       </div>
       <div className='flex px-10 p-3 '>
       <img 
       className='h-10 w-10'
       alt='hlogo'
       src='https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png' />
       <h1 className='mx-5'>Subscriptions</h1>
       
       </div>
       <br></br>
       <hr></hr>
       <div className='m-2 '>
        <h1>You</h1>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_640.png' />
            <li className='mx-3'>Your channel</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_-c-cC9dqAzWLe5j2QrnrA5EZbZmC8xGvLIk6muM7p-3avA7AzvUUNuwixTmwsrpnas&usqp=CAU' />
            <li className='mx-3'>History</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://static.thenounproject.com/png/111940-200.png' />
            <li className='mx-3'>Your videos</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://static.thenounproject.com/png/111940-200.png' />
            <li className='mx-3'>Watch later</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://www.shutterstock.com/image-vector/icon-watch-later-600w-710534860.jpg' />
            <li className='mx-3'>Downloads</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9M0Li5eVxvYzVJpHUEaSDoD3389Dz0WNRvu-epo&s' />
            <li className='mx-3'>Show more</li>
            
        </ul>
       </div>
       <br></br>
       <hr></hr>
       <div className='m-2 '>
        <h1>Subscriptions</h1>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKHHZw9nWhu7tr2ux89ewCKjL8dDRkY1qTvmXefW17jDLVPQmr583_vdJrAozcZyM4UM&usqp=CAU' />
            <li className='mx-3'>Wion</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://i.pinimg.com/736x/dd/ee/dc/ddeedc4bd470a074ff15dba7f6ae2db0.jpg' />
            <li className='mx-3'>English TV</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://exchange4media.gumlet.io/news-photo/1523271506_yl9CaZ_CNBCTV18-Logo.jpg?w=400&dpr=2.6' />
            <li className='mx-3'>CNBC Awaaz</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrM31v-W6slrYRReAN7G_yS1WHD8UWjR4a2A&usqp=CAU' />
            <li className='mx-3'>Online Learing</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://img.freepik.com/free-vector/glow-logo_1071-151.jpg?w=740&t=st=1701521371~exp=1701521971~hmac=f2caf42b80e078b2e8562a8df6d8756aa94f4625b7bd96556308c8a607969cc9' />
            <li className='mx-3'>Study glow</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9M0Li5eVxvYzVJpHUEaSDoD3389Dz0WNRvu-epo&s' />
            <li className='mx-3'>Show 500 more</li>
            
        </ul>
       </div>
       <br></br>
       <hr></hr>
       <div className='m-2 '>
        <h1>Explore</h1>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://thumbs.dreamstime.com/z/trending-logo-vector-design-logo-concept-118241271.jpg' />
            <li className='mx-3'>Tranding</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCerXyvHZ3lAy3XNcP65v4djmEqGFTStnEUQ&usqp=CAU' />
            <li className='mx-3'>Shopping</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://t4.ftcdn.net/jpg/01/06/47/61/360_F_106476142_zMZkkTkhMeq0DIjV20oJI00e3QXLYIGN.jpg' />
            <li className='mx-3'>Music</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://cdn2.vectorstock.com/i/1000x1000/38/76/cinema-logo-movie-emblem-template-vector-19873876.jpg' />
            <li className='mx-3'>Movies</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://t4.ftcdn.net/jpg/05/09/96/71/360_F_509967154_SxP5oGfK7imqJXezihVIbWq9k0i21gwE.jpg' />
            <li className='mx-3'>Live</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://thumbs.dreamstime.com/b/wolf-mascot-esport-gaming-logo-269234424.jpg' />
            <li className='mx-3'>Gaming</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://t3.ftcdn.net/jpg/01/79/14/62/360_F_179146215_NEoBhSC2oKw9hwX7K3hAkAPLZueAeGEs.jpg' />
            <li className='mx-3'>News</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sports-logo-football-logo-design-template-3ce28d4e7f05e330ed86407f63c53dc8_screen.jpg?ts=1676704351' />
            <li className='mx-3'>Sports</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://t4.ftcdn.net/jpg/01/28/93/91/360_F_128939133_0WXTVdZ1bv1NXusQsdYYJLIwTVoXHqQ7.jpg' />
            <li className='mx-3'>Learning</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9ZotLFWt_csGuLfql8CzE4m6bhd7uXiG4A&usqp=CAU' />
            <li className='mx-3'>Fashion & Beauty</li>
            
        </ul>
       </div>

       <br></br>
       <hr></hr>
       <div className='m-2 '>
        
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKp_33xq67iVMKDm2Wclia9G_WGSHGhtJGA&usqp=CAU' />
            <li className='mx-3'>Setting</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTErybUdBSQ68UJoZ22nPRzLI09-7o_1iKlNg&usqp=CAU' />
            <li className='mx-3'>Report history</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYT0jD63BEINkzLSZbJq7WqtBLnAQCZBK92A&usqp=CAU' />
            <li className='mx-3'>Help</li>
            
        </ul>
        < ul className='flex px-10 p-3'>
            <img 
            className='h-10 w-10'
            alt='channel'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5cEbvAI4wEruXyLi18K72qJQ2V-7fDnjk7w&usqp=CAU' />
            <li className='mx-3'>Send feedback</li>
            
        </ul>
        </div>

        <br></br>
       <hr></hr>
       <div className='text-center text-lg'>
        <p>About Press Copyright <br></br>Contact us Creators <br></br>Advertise Developers</p>
        <br></br>
        <p >Terms Privacy Policy & Safety <br></br>How YouTube works <br></br> Test new features</p>
        <br></br>
        <br></br>
       <p className='text-sm'>©2023 Google LLC</p>
       </div>
       
       </div>
  )
}

export default Sidebar
