import {useQuery} from '@apollo/client'
import TeamList from './TeamList'
import { QUERY_TEAMS } from '../../utils/queries'
import TeamForm from './TeamForm'
import SideNav from './SideNav'
import TopNav from './topNav'

export default function Create() {
    const { loading, data } = useQuery(QUERY_TEAMS)
    const teams = data?.teams || []

    console.log(teams)
    console.log(teams.id)

    return (
      <div>
      <section>
        <TopNav/>
      </section>
      <div className="flex-comps">
        <section>
          <SideNav/>
        </section>
        <section className='w-full p-8 bg-gray-100'>
          <div className="flex-row justify-center">
            <div className="col-12 col-md-10 my-3">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                  <div>
                    <TeamForm />
                    <TeamList 
                        teams={teams}
                    />
                  </div>
                )}
            </div>
          </div>
        </section>
      </div>
      </div>
    );
}
