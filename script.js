const msg=document.querySelector('.msg');
        const guess=document.querySelector('input');
        const btn=document.querySelector('.btn');

        let play=false;
        let newWords="";
        let randWords="";
        let sWords=['python','javascript','c++','php','java','c#','html','css','reactjs','angular','swift','android','sql'];
        let createNewWords=()=>{
            let ranNum=Math.floor(Math.random() * sWords.length);
           // console.log(ranNum)
           let newTempSwords=sWords[ranNum];
           console.log(newTempSwords.split(""));
           return newTempSwords;

        }
        const scrambleWords=(arr)=>{
            for(let i=arr.length-1; i>0;i--) {
                let temp=arr[i]
                //console.log(temp)
                let j=Math.floor(Math.random()*(i+1));
                //console.log(i);
               // console.log(j);

                arr[i]=arr[j];
                arr[j]=temp;
            }
            return arr;
        }

        btn.addEventListener("click",function(){
            if(!play){
                play=true;
                btn.innerHTML="Guess";
                guess.classList.toggle('hidden');
                newWords=createNewWords();
                randWords=scrambleWords(newWords.split(""));
               // console.log(randWords.join(""));
               msg.innerHTML=`Guess the Words: ${randWords}`;
            }else{
                let tempWords=guess.value;
                if(tempWords===newWords){
                    console.log("Correct")
                    play=false;
                    msg.innerHTML=`Awesome it's correct.it is ${newWords}`;
                    btn.innerHTML="Start Again";
                    guess.classList.toggle('hidden');
                    guess.value="";

                }else{
                    console.log("Incorrect");
                    msg.innerHTML=`Sorry boss. it is not Correct.plz try again ${randWords}`
                }
            }

        })
