'use client'
import { ActionItem } from "@/app/lib/definitions";
import React from "react";
import { Chart } from "react-google-charts";




export default function ActionVisual ( { items } : { items: ActionItem[] } ) {

    const complete = items.filter(x => x.complete === true);
    const incomplete = items.filter(x => x.complete === false);

    let data: any[] = [
        ["Month", "Complete", "Incomplete"],
        ["Jan"],
        ["Feb"],
        ["Mar"],
        ["Apr"],
        ["May"],
        ["Jun"],
        ["Jul"],
        ["Aug"],
        ["Sep"],
        ["Nov"],
        ["Dec"]
    ];

    data.find(x => x[0] == "Jan")?.push(complete.filter(x => x.dueby.getMonth() === 1).length)
    data.find(x => x[0] == "Jan")?.push(incomplete.filter(x => x.dueby.getMonth() === 1).length)

    data.find(x => x[0] == "Feb").push(complete.filter(x => x.dueby.getMonth() === 2).length)
    data.find(x => x[0] == "Feb").push(incomplete.filter(x => x.dueby.getMonth() === 2).length)

    data.find(x => x[0] == "Mar").push(complete.filter(x => x.dueby.getMonth() === 3).length)
    data.find(x => x[0] == "Mar").push(incomplete.filter(x => x.dueby.getMonth() === 3).length)

    data.find(x => x[0] == "Apr").push(complete.filter(x => x.dueby.getMonth() === 4).length)
    data.find(x => x[0] == "Apr").push(incomplete.filter(x => x.dueby.getMonth() === 4).length)

    data.find(x => x[0] == "May").push(complete.filter(x => x.dueby.getMonth() === 5).length)
    data.find(x => x[0] == "May").push(incomplete.filter(x => x.dueby.getMonth() === 5).length)

    data.find(x => x[0] == "Jun").push(complete.filter(x => x.dueby.getMonth() === 6).length)
    data.find(x => x[0] == "Jun").push(incomplete.filter(x => x.dueby.getMonth() === 6).length)

    data.find(x => x[0] == "Jul").push(complete.filter(x => x.dueby.getMonth() === 7).length)
    data.find(x => x[0] == "Jul").push(incomplete.filter(x => x.dueby.getMonth() === 7).length)

    data.find(x => x[0] == "Aug").push(complete.filter(x => x.dueby.getMonth() === 8).length)
    data.find(x => x[0] == "Aug").push(incomplete.filter(x => x.dueby.getMonth() === 8).length)

    data.find(x => x[0] == "Sep").push(complete.filter(x => x.dueby.getMonth() === 9).length)
    data.find(x => x[0] == "Sep").push(incomplete.filter(x => x.dueby.getMonth() === 9).length)

    data.find(x => x[0] == "Oct")?.push(complete.filter(x => x.dueby.getMonth() === 10).length)
    data.find(x => x[0] == "Oct")?.push(incomplete.filter(x => x.dueby.getMonth() === 10).length)

    data.find(x => x[0] == "Nov").push(complete.filter(x => x.dueby.getMonth() === 11).length)
    data.find(x => x[0] == "Nov").push(incomplete.filter(x => x.dueby.getMonth() === 11).length)

    data.find(x => x[0] == "Dec").push(complete.filter(x => x.dueby.getMonth() === 12).length)
    data.find(x => x[0] == "Dec").push(incomplete.filter(x => x.dueby.getMonth() === 12).length)

    const options = {
        colors: ['#ca861b', '#1e88e5']
      };


    return (
        <section className="flex 
        flex-col
        items-center
        justify-center
        py-20
        ">
    <h1 className="text-blue-600 
     text-3xl 
     font-bold">
        Action Status by Month
    </h1>


        <Chart
        chartType="BarChart"
        width="100%"
        height="600px"
        data={data}
        options={options}
      />
      </section>    
    )
}

