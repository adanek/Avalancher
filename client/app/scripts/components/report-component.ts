import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Location, RouterLink} from 'angular2/router';
import {Report} from "../models/report";
import {ReportService} from "../services/report-service";


@Component({
    selector: 'risk-report',
    templateUrl: 'views/report-component.html',
    directives: [CORE_DIRECTIVES, RouterLink]
})
export class ReportComponent {

    public title: string = "Aktuelle Lawinenlage";
    public reportDate:Date = new Date();
    public report:Report = {
        risk: 0,
        creationDate: '',
        author:'',
        assessment: '',
        snowStructure:'',
        forecast:'',
        summary:'',
        info:''
    };

    constructor(private reportService:ReportService, private location:Location){

        reportService.getReport()
            .then((data:Report) => {
                this.report = data;
                this.reportDate = new Date(data.creationDate);
            })
            .catch(()=> console.error("Couldn't receive avalanche report"));
    }

    /**
     * Returns the appropritae icon for the given avalanche risk
     * @param risk : string the risk you want the icon for
     * @return the relative uri of the icon
     */
    public getAvalancheRiskIcon(risk: number){

        var base = 'images/';
        var src = base;
        switch(risk){
            case 1:
                src = src + '1_standard.jpg';
                break;
            case 2:
                src= src + '2_standard.jpg';
                break;
            case 3:
                src = src + '3_standard.jpg';
                break;
            case 4:
            case 5:
                src = src + '4_5_standard.jpg';
                break;
            default:
                src = src + 'no_rating_standard.jpg';
        }

        return src;
    }
}