import Plot from 'react-plotly.js';
import {students} from "../../constants/studData.js";

const stats=()=>{
    const layout = {
    title: 'Grade Distribution',
    height: 450,
    width: 485
  };

    let p=0;
    let f=0;
    let all=0;
    let grade;
    let a=0,b=0,c=0,d=0,e=0;
    let avg=0;
    let max=-1,min=11;
    for(let x in students){
        all=all+1;
       grade=Math.round((0.6*students[x].examGrade)+(0.4*students[x].ratingGrade));
       grade>=4?p=p+1:f=f+1;
       if(grade>=0&&grade<2){a+=1};
       if(grade>=2&&grade<4){b+=1};
       if(grade>=4&&grade<6){c+=1};
       if(grade>=6&&grade<8){d+=1};
       if(grade>=8&&grade<10){e+=1};
       if(grade>max){max=grade};
       if(grade<min){min=grade};
       
    }
    avg=(a+b+c+d+e)/5;
   
    const data = [
      {
        values: [a,b,c,d,e],
        labels: ['0-2','2-4', '4-6', '6-8','8-10'],
        type: 'pie',
        hole: 0.5,
        marker: {
          colors: ['red', 'orange','#FF8C00','yellow',"Green"]
        }
      }
    ];
  
      return(<><br/><Plot
        data={[
          {
            x: ["All","Passed","Failed"],
            y: [all,p,f],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
            name: 'Scatter Plot',
          },
          {
            type: 'bar',
            x: ["All","Passed","Failed"],
            y: [all,p,f],
            name: 'Bar Chart',
            marker: {color:['gray','Green','Red']},
          },
        ]}
        layout={{
          width: 486,
          height: 450,
          title: 'Student Details',
          xaxis: {title: 'X Axis'},
          yaxis: {title: 'Y Axis'},
        }}
      />
      <Plot
      data={data}
      layout={layout}
    />
     <Plot
        data={[
          {
            type: 'bar',
            x: ["Maximum","Average","Minimum"],
            y: [max,avg,min],
            name: 'Bar Chart',
            marker: {color:['Green','Yellow','Red']},
          }
        ]}
        layout={{
          width: 485,
          height: 450,
          title: 'Student Details',
          xaxis: {title: 'X Axis'},
          yaxis: {title: 'Y Axis'},
        }}
      />
      </>
      )
  
  
}
export default stats;
