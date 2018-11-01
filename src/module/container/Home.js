import React, { Component } from 'react';

import axios from 'axios';

class Home extends Component {
  componentDidMount(){
    axios.post('https://graph.facebook.com/190026141421303/instant_articles?access_token=EAADXWf9nPKMBAOmCcRQXojZBgCbsNHoTXlY4WisS9UWaAevfiS0lJuD199pHRXOyZAYbGYQUp7GZBkW9sEwoqbqEDkZBHTyp5vZB1kHZB5hD9Wpk71Y7iH7s4doXKAZCKNDqvnDOOVaLxSZABKcZAPi3WRzvSfYxCARQZD',{
        access_token : 'EAADXWf9nPKMBAOmCcRQXojZBgCbsNHoTXlY4WisS9UWaAevfiS0lJuD199pHRXOyZAYbGYQUp7GZBkW9sEwoqbqEDkZBHTyp5vZB1kHZB5hD9Wpk71Y7iH7s4doXKAZCKNDqvnDOOVaLxSZABKcZAPi3WRzvSfYxCARQZD',
        html_source : `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta property="fb:pages" content="190026141421303" />
            <link rel="canonical" href='http://eenadusiri.net/GST-fixed-1211-items-for-GST-regime-AuAIJ1C'>
            <meta property="fb:article_style" content="article-style"> 
        </head>
        <body>
            <article>
                    <header>
                            <figure>
                                <img src="https://eenadusiri.s3.amazonaws.com/images/e128be25-fd9c-5e95-b2a9-a42fc9fc84c8" alt="జీఎస్‌టీ రేట్ల నిర్ణ‌యం">
                            </figure>         
            
                        <h1>జీఎస్‌టీ రేట్ల నిర్ణ‌యం</h1>
                        <h2>జులై 1 నుంచి అమ‌ల్లోకి రానున్న వ‌స్తు, సేవ‌ల ప‌న్ను కోసం జీఎస్‌టీ మండ‌లి 1211 ర‌కాల వ‌స్తువుల‌పై ప‌న్ను రేట్ల‌ను నిర్ణ‌యించింది.</h2>
            
                        <time class="op-published" dateTime="2017-05-19T05:21:18.225Z">2017-05-19T05:21:18.225Z</time>
                    </header>
                    <p>ఆర్థిక మంత్రి అరుణ్‌ జైట్లీ అధ్యక్షతన నిన్న జ‌రిగిన 14 వ జీఎస్‌టీ మండ‌లి స‌మావేశంలో   పాలు, ఆహ‌ర ప‌దార్థాల‌పై ఎలాంటి ప‌న్నును విధించ‌బోమ‌ని తెలిపారు. నిత్యావ‌స‌ర వ‌స్తువుల‌ను సైతం త‌క్కువ శ్లాబ్ అయిన 5 శాతం పరిధిలోకే తీసుకు రానున్నామ‌నీ ఆయ‌న అన్నారు. ఆరు వస్తువులు మినహా మిగిలిన 1,211 వస్తువులపై విధించనున్న పన్నులను ఖరారు చేశారు.</p>
        <div id='div-gpt-ad-1522407790155-0' style="text-align: center; margin: 1rem auto;">
        <script>
        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1522407790155-0'); });
        </script>
        </div>
        <p>ఈ 1211 వ‌స్తువుల్లో 14 శాతం వస్తువులపై 5 శాతం పన్ను ఉందని, 17 శాతం వస్తువులు 12 శాతం పరిధిలో ఉన్నాయని, 43 శాతం వస్తువులకు 18 శాతం పన్ను శ్రేణి వర్తిస్తుందని వివరించారు. కేవలం 19 శాతం వస్తువులపై మాత్రమే 28 శాతం పన్ను విధిస్తున్నట్టు తెలిపారు. కాబ‌ట్టీ 81 శాతం వస్తువులపై 18 శాతం అంతకన్నా తక్కువ శ్రేణిలో పన్ను ఉంటుందని స్పష్టం చేశారు.  అందువల్ల ద్రవ్యోల్బణం పెరిగే సమస్యే లేదని అన్నారు.</p>
        <p>బంగారం, పాదరక్షలు, బ్రాండెడ్‌ వస్తువులు, బీడీలు, ప్యాకింగ్‌ చేసిన ఆహార పదార్థాలు, సేవలపై పన్నులను శుక్రవారం జరిగే చర్చల్లో ఖరారు చేస్తామని అరుణ్‌ జైట్లీ తెలిపారు. ఒక వేళ ఈ రోజూ సేవ‌లు మొద‌టైన వాటిపై ఏకాభిప్రాయం కుద‌ర‌క‌పోతే మ‌రో రోజు స‌మావేశ‌మై రేట్ల‌ను నిర్ణ‌యిస్తామ‌ని రెవెన్యూ కార్య‌ద‌ర్శి హ‌స్ముఖ్ అధియా తెలిపారు.</p>
        
                </article>
        </body>
        </html> `,
    }).then(responsde => console.log('done'))
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
          Home
      </div>
    );
  }
}

export default Home;