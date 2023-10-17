import Nav from '../Nav'
import AnimatedColumns from './AnimatedCOlumn'

function Weekly() {
  return (
    <main className='mt-10 '>
        {/* <Nav/> */}
     <div className='main'>
     <div className=' bg-slate-50 -z-10 absolute w-full left-0 top-0 h-[500px] '>     </div>
            <div className='container text-center z-30 py-10'>
                    <div className='  text-white text-center  '>
                   <span className='bg-black text-xs px-2 py-1'> Weekly Market Insights</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <h2 className='  mt-2 max-w-sm md:max-w-xl lg:max-w-2xl'>Why Bank Equities Price in Recession while Credit Markets See Expansion</h2>
                    </div>
                    <div className=''>
                        <p className='text-xs'>POSTED ON SEP 5, 2023</p>
                    </div>           
            </div>
        <div className='max-w-[1140px] mx-auto '>
            <img className='text-center flex justify-center items-center relative' src="https://www.citibank.co.uk/gwm/insights/weekly-market-analysis/why_bank_equities_price_in_recession_while_credit_markets_see_expansion/images/banner.jpg" alt="" />
        </div>
     </div>

     <div className='secondary '>

        <div className='max-w-[1140px] mx-auto flex justify-center items-center'>
            <div className=' w-1/4'>
        side
            </div>

            <div className='w-3/6'>
              <AnimatedColumns/>
            </div>
        </div>





     </div>



    

    </main>
  )
}

export default Weekly