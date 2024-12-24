
export default function Card({activity}){
    const selectBgImage = (title) => {
        switch (title) {
            case 'Play':
                return {
                    icon: '/img/icon-play.svg',
                    color: 'hsl(195, 74%, 62%)'
                }
            case 'Study':
                return {
                    icon: '/img/icon-study.svg',
                    color: 'hsl(348, 100%, 68%)'
                }
            case 'Excercise':
                return {
                    icon: '/img/icon-excercise.svg',
                    color: 'hsl(145, 58%, 55%)'
                }
            case 'Social':
                return {
                    icon: '/img/icon-social.svg',
                    color: 'hsl(264, 64%, 52%)'
                }
            case 'Self Care':
                return {
                    icon: '/img/icon-self-care.svg',
                    color: 'hsl(43, 84%, 65%)'
                }
            default:
                return {
                    icon: '',
                    color: ''
                }
        }
    }


    const {color, img} = selectBgImage(activity.title)

    // console.log(color, img)

    return (
    
        color && img && (
            <div className={`border rounded-xl bg-[${color}] p-4`}>
                <div className="info">
                    <img src={img} alt="" />
                    <div>
                        <span className="title">{activity.title}</span>
                    </div>
                    <div className="infoTime">
                        <h3>{'fasdfasf'}</h3>
                    </div>
                </div>
            </div>
        )
    )
}