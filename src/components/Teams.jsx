import '@fontsource/marko-one';
import '@styles/teams.css'

const Teams = () => {
  return (
    <section>
      <h2 className='text-[40px] py-6'>Mi equipo de desarrollo</h2>

      <div className='inline-grid grid-cols-2 gap-8'>
        <div className='bg-white w-[330px] h-[400px]'>
            <picture className="flex justify-center pt-4">
                <img 
                className="w-[300px] h-[298px]"
                src="/president.jpeg" alt="" 
                />
            </picture>
        <div className="description text-center pt-4">
            <p>Presidente</p>
            <p>Fernando P.</p>
        </div>
        </div>

        {/* creative director */}
        <div className='bg-white w-[330px] h-[400px]'>
            <picture className="flex justify-center pt-4">
                <img 
                className="w-[300px] h-[298px]"
                src="/creativeDirector.png" alt="" 
                />
            </picture>
        <div className="description text-center pt-4">
            <p>Director Creativo</p>
            <p>Fernando P.</p>
        </div>
        </div>

        {/* Desarrollador */}
        <div className='bg-white w-[330px] h-[400px]'>
            <picture className="flex justify-center pt-4">
                <img 
                className="w-[300px] h-[298px]"
                src="/intern.png" alt="" 
                />
            </picture>
        <div className="description text-center pt-4">
            <p>Director Creativo</p>
            <p>Fernando P.</p>
        </div>
        </div>

        {/* Lider de equipo */}
        <div className='bg-white w-[330px] h-[400px]'>
            <picture className="flex justify-center pt-4">
                <img 
                className="w-[300px] h-[298px]"
                src="/teams_lead.png" alt="" 
                />
            </picture>
        <div className="description text-center pt-4">
            <p>Team Leader</p>
            <p>Fernando P.</p>
        </div>
        </div>

      </div>
    </section>
  )
}

export default Teams
