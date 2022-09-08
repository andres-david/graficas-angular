import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [ 
  ];
  // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' 
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor( private graficasService: GraficasService) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe( resp => {
    //     console.log( resp );

    //     const labels = Object.keys( resp );
    //     const values = Object.values( resp );

    //     this.doughnutChartData={
    //       labels:Object.keys(resp),
    //       datasets:[{data:Object.values(resp)}]
    //     }

    //   });

    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({labels, values}) => {

        this.doughnutChartData={
          labels: labels,
          datasets:[{data: values}]
        }
        
        console.log( labels );
        console.log( values );

      })

  }

  

}
