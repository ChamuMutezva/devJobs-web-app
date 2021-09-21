import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router'

import { JobsContext } from '../Context/JobsContext'

const ListPage = () => {
    const location = useLocation()

    const [data] = useContext(JobsContext)
    const pathname = location.pathname.split("/")
    const lastitem = pathname[pathname.length - 1]
    const targetJob = data[lastitem - 1]
    
    const websiteArray = targetJob.website.split("/")
    const websiteName = websiteArray[websiteArray.length - 1]
    console.log(data)
    console.log(websiteName)
    console.log(pathname)
    console.log(lastitem)
    console.log(targetJob)

    useEffect(() => {
        console.log(targetJob)
        if (targetJob === undefined) {
            return <div>return to homepage</div>
        }
    }, [targetJob])

  

    return (
        
        <main className="main">
            <h1 className="sr__only"> devjobs, your one stop site for developer jobs </h1>
            <div className="card__holder list__card">
                <div className="card">

                    <div className="card__img__holder list__card__img__holder"
                        style={{ backgroundColor: targetJob.logoBackground }}>
                        <img
                            className="list__card__img"
                            src={targetJob.logo}
                            alt=""
                        />
                    </div>
                    <div className="company__details">
                        <h2 className="company__name">{targetJob.company}</h2>
                        <p className="website__name">{websiteName}.com</p>
                    </div>
                    <a className="company__website--btn" href={targetJob.website}>Company Site</a>

                </div>
            </div>

            <div className="details">
                <div className="card__details">
                    <div className="company__more">
                        <div className="duration">
                            <span className="duration__hrs">{targetJob.postedAt}</span>
                            <span className="span__contract">{targetJob.contract}</span>
                        </div>
                        <h2 className="card__title card__title__listpage">{targetJob.position}</h2>
                        <p className="company__location">{targetJob.location}</p>
                    </div>
                    <a className="apply--btn" href={targetJob.apply}>apply now</a>
                    <p className="job__description">{targetJob.description}</p>
                </div>
                <div className="requirements">
                    <h2 className="requirements__title">Requirements</h2>
                    <p className="require__content">                        
                        {targetJob.requirements.content}
                    </p>

                    <ul>
                        {targetJob.requirements.items.map((item, index) =>
                            <li className="job__require__item" key={index}>{item}</li>
                        )}
                    </ul>

                </div>
            </div>

            <div className="role">
                <h2 className="role__title">What you will do</h2>
                <p className="role__content">{targetJob.role.content}</p>

                <ul>

                    {targetJob.role.items.map((item, index) =>
                        <li className="job__role__item" key={index}>{item}</li>
                    )}
                </ul>

            </div>

            <footer>
                <button>Apply now</button>
            </footer>
        </main>
    )
}
export default ListPage