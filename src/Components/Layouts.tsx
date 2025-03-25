
import First from '../testimonials-grid-section-main/images/image-daniel.jpg'
import jonathn from '../testimonials-grid-section-main/images/image-jonathan.jpg'
import kira from '../testimonials-grid-section-main/images/image-kira.jpg'
import harmon from '../testimonials-grid-section-main/images/image-jeanette.jpg'
import patrick from '../testimonials-grid-section-main/images/image-patrick.jpg'
function Layouts() {
  return (
    <div className="grid gap-6 grid-cols-4 grid-rows-2 max-w-7xl mx-auto p-8"
  style={{
    gridTemplateAreas: `
      "box1 box1 box2 box3"
      "box4 box5 box5 box3"
    `,
  }}>
      <div className="bg-purple-500 text-white p-4 rounded-lg h-84" style={{ gridArea: "box1" }}>
  <div className='flex items-center'>
    <img className='rounded-full w-10 h-10' src={First} alt="Daniel" />
    <div className='pl-4'>
      <h2 className='font-semibold'>Daniel Clifford</h2>
      <p className='text-sm opacity-70'>Verified Graduate</p>
    </div>
  </div>
  
  <p className='mt-4 font-bold  text-lg'>
    I received a job offer mid-course, and the subjects I learned were current and relevant to my role.
        </p>
        <p className='pt-4 text-white'>I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
  transition and have heard some people who had an amazing experience here. I signed up 
  for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
  The next 12 weeks was the best - and most grueling - time of my life. Since completing 
  the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.</p>
</div>
      <div className="bg-gray-600 rounded-lg p-4 text-sm " style={{ gridArea: "box2" }}> 
        


      <div className='flex items-center'>
    <img className='rounded-full w-10 h-10' src={jonathn} alt="Daniel" />
    <div className='pl-4'>
      <h2 className='font-semibold'> Jonathan Walters</h2>
      <p className='text-sm opacity-70'>Verified Graduate</p>
    </div>
  </div>
  
  <p className='mt-4 font-bold text-lg'>
  The team was very supportive and kept me motivated        </p>
        <p className='pt-4 text-white'>I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
        for a big company. This was one of the best investments I’ve made in myself.</p>
  </div>
      <div className="bg-white rounded-lg p-4" style={{ gridArea: "box3" }}>
        
      
      <div className='flex items-center'>
    <img className='rounded-full w-10 h-10' src={kira} alt="Daniel" />
    <div className='pl-4'>
            <h2 className='font-semibold'>
            Kira Whittle</h2>
      <p className='text-sm opacity-70'>Verified Graduate</p>
    </div>
  </div>
  
  <p className='mt-4 font-bold text-lg'>
    I received a job offer mid-course, and the subjects I learned were current and relevant to my role.
        </p>
        <p className='pt-4 text-gray-800'>Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
  professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
  student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
  did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
  project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
  could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
  experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
  100% recommend!</p>
      
      
      
      </div>
      <div className="bg-white rounded-lg p-4" style={{ gridArea: "box4" }}> 
        

      <div className='flex items-center'>
    <img className='rounded-full w-10 h-10' src={harmon} alt="Daniel" />
    <div className='pl-4'>
      <h2 className='font-semibold'> Jeanette Harmon</h2>
      <p className='text-sm opacity-70'>Verified Graduate</p>
    </div>
  </div>
  
  <p className='mt-4 font-bold text-lg'>
    I received a job offer mid-course, and the subjects I learned were current and relevant to my role.
        </p>
        <p className='pt-4  text-gray-800'>I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
  transition and have heard some people who had an amazing experience here. </p>
  </div>
      <div className="bg-blue-950 text-white rounded-lg p-4" style={{ gridArea: "box5" }}>
        
      <div className='flex items-center'>
    <img className='rounded-full w-10 h-10' src={patrick} alt="Daniel" />
    <div className='pl-4'>
      <h2 className='font-semibold'>Patrick Abrams</h2>
      <p className='text-sm opacity-70'>Verified Graduate</p>
    </div>
  </div>
  
  <p className='mt-4 font-bold text-lg'>
  Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
  learning from their experiences was easy.
        </p>
        <p className='pt-4 text-white'>The staff seem genuinely concerned about my progress which I find really refreshing. The program 
  gave me the confidence necessary to be able to go out in the world and present myself as a capable 
  junior developer. The standard is above the rest. You will get the personal attention you need from 
  an incredible community of smart and amazing people.</p>
      
      
      
      </div>
</div>
  )
}

export default Layouts