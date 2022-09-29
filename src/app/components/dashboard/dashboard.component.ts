import { Component, OnInit } from '@angular/core';
import { TotalOrders } from 'src/app/models/total-orders';
import { TotalSales } from 'src/app/models/total-sales';
import { AuthService } from 'src/app/services/auth.service';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalSales: TotalSales = {totalSales : 0};
  totalOrders: TotalOrders = {totalOrders : 0};
  panierMoyen?: number;
  pourcentageConvCommand!:number;
  

  // nombre totales des ventes


  // nb New Client
  nbNewClient: any[] = [
    {
      "name": "Nombre de nouveaux clients",
      "series": [
        {
          "value": 50,
          "name": "2016-09-23T18:00:19.839Z"
        },
        {
          "value": 12,
          "name": "2016-09-20T22:54:46.908Z"
        },
        {
          "value": 100,
          "name": "2016-09-16T09:46:18.335Z"
        },
        {
          "value": 120,
          "name": "2016-09-22T12:28:51.300Z"
        },
        {
          "value": 50,
          "name": "2016-09-21T12:17:58.722Z"
        }
      ]
    },
  ];
  // Nb New Client

  // NB VISiTE
  nbVisite: any[] = [
    {
      "name": "Nombre de visites",
      "series": [
        {
          "value": 100,
          "name": "2016-09-23T18:00:19.839Z"
        },
        {
          "value": 1000,
          "name": "2016-09-20T22:54:46.908Z"
        },
        {
          "value": 500,
          "name": "2016-09-16T09:46:18.335Z"
        },
        {
          "value": 900,
          "name": "2016-09-22T12:28:51.300Z"
        },
        {
          "value": 2000,
          "name": "2016-09-21T12:17:58.722Z"
        }
      ]
    },
  ];
  // Nb Visites

  // Conversion Commande
  constructor(private authService : AuthService, private statsService: StatsService) { }

  conversionCommande: any[] = [];
  
  //Option line charts
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = false;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = ' ';
  yAxisLabel: string = ' ';
  timeline: boolean = true;
  // options line charts


  ngOnInit(): void {
    // Total Sales
    this.statsService.getTotalSales().subscribe(data =>{
      this.totalSales = data;
      // console.log(this.totalSales.totalSales); 

    })  

    // Total Orders
    this.statsService.getTotalOrders().subscribe(data =>{
      this.totalOrders = data;
      console.log(this.totalOrders);
    })


  }

  doLogOut(){
    this.authService.doLogout();
  }

  print(){
    window.print();
  }

}
