function handleSkillNivel(nivel,setSkillNivel){
    let i = 0;
    setInterval(() => {
        if (i <= nivel) {

            setTimeout(()=>{
                setSkillNivel(i);
                i++;
            });
            
        }
    }, 40);}






    


export { handleSkillNivel };