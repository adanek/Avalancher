package models;


public class RiskReport {

    // <caaml:travelAdvisoryComment>
    public String assessment;

    // <caaml:snowpackStructureComment>
    public String snowStructure;

    // <caaml:dateTimeReport>
    public String creationDate;

    // <caaml:comment>Patrick Nairz</caaml:comment>
    public String author;

    // <caaml:wxSynopsisComment>
    public String forecast;

    // <caaml:mainValue>3</caaml:mainValue>
    public Integer risk;

//    <caaml:comment>
//    Neben der hohen Störanfälligkeit in Schattenhängen ist zunehmend auf frischen Triebschnee zu achten!
//    </caaml:comment>
    public String summary;

//    <caaml:highlights>
//    Weiterhin hohe Störanfälligkeit der Schneedecke v.a. in Schattenhängen oberhalb etwa 2000m!
//    </caaml:highlights>
    public String info;
}
