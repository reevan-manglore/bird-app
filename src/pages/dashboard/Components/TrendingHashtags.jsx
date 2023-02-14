import React from 'react'

function TrendingHashtags({ introduction, largeHedding, trendingWith, tweetCount }) {
    return (
        <article className='my-4'>
            <h5 className='text-sm text-slate-600'>{introduction}</h5>
            <p className='text-white font-semibold'>{largeHedding}</p>
            {
                trendingWith?.length > 0 ?
                    <p className='text-slate-500 text-sm'>
                        trending
                        {
                            trendingWith.map(e => <span className='text-primary'> {e} </span>)
                        }


                    </p>
                    : tweetCount ?
                        <span className='text-slate-500 text-sm'>{tweetCount} tweets</span>
                            :
                        ""
            }
        </article>
    )
}

export default TrendingHashtags