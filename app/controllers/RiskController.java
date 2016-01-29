package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.RiskReport;
import play.cache.CacheApi;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import javax.inject.Inject;

import java.util.*;
import org.dom4j.*;
import org.dom4j.io.SAXReader;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.concurrent.Callable;

/**
 * Created by adanek on 10.11.2015.
 */
public class RiskController extends Controller {

    @Inject
    CacheApi cache;

    // get snow risk report
    public Result getRiskReport() throws IOException {
    	
    	URL url = new URL("https://apps.tirol.gv.at/lwd/produkte/LLBTirol.xml");
		HttpURLConnection connection = (HttpURLConnection) url.openConnection();
		connection.setRequestMethod("GET");
		connection.setDoInput(true);
		connection.setDoOutput(false);
		connection.setUseCaches(false);

		BufferedReader reader = new BufferedReader(new InputStreamReader(
				connection.getInputStream()));

		String xmlText = "";
		for (String line; (line = reader.readLine()) != null;) {
			xmlText = xmlText + line;
		}
		
		 RiskReport report = new RiskReport();
		
		SAXReader saxreader = new SAXReader();
		Document document;
		try {
			document = saxreader.read("https://apps.tirol.gv.at/lwd/produkte/LLBTirol.xml");
			
			List<Node> nodes = document.selectNodes("caaml:Bulletin/caaml:metaDataProperty/caaml:MetaData/caaml:dateTimeReport" );
			
			for(Node node : nodes){
				report.creationDate = node.getStringValue();
				System.out.println(report.creationDate);
				break;
			}

			nodes = document.selectNodes("caaml:Bulletin/caaml:metaDataProperty/caaml:MetaData/caaml:comment" );
			
			for(Node node : nodes){
				report.author = node.getStringValue();
				System.out.println(report.author);
				break;
			}
			
			nodes = document.selectNodes("caaml:Bulletin/caaml:bulletinResultsOf/caaml:BulletinMeasurements/caaml:snowpackStructureComment" );
			
			for(Node node : nodes){
				report.snowStructure = node.getStringValue();
				System.out.println(report.snowStructure);
				break;
			}
			
			nodes = document.selectNodes("caaml:Bulletin/caaml:bulletinResultsOf/caaml:BulletinMeasurements/caaml:travelAdvisoryComment" );
			
			for(Node node : nodes){
				report.assessment = node.getStringValue();
				System.out.println(report.assessment);
				break;
			}
			
			nodes = document.selectNodes("caaml:Bulletin/caaml:bulletinResultsOf/caaml:BulletinMeasurements/caaml:wxSynopsisComment" );
			
			for(Node node : nodes){
				report.forecast = node.getStringValue();
				System.out.println(report.forecast);
				break;
			}
			
			nodes = document.selectNodes("caaml:Bulletin/caaml:bulletinResultsOf/caaml:BulletinMeasurements/caaml:highlights" );
			
			for(Node node : nodes){
				report.info = node.getStringValue();
				System.out.println(report.info);
				break;
			}
			
			nodes = document.selectNodes("caaml:Bulletin/caaml:bulletinResultsOf/caaml:BulletinMeasurements/caaml:comment" );
			
			for(Node node : nodes){
				report.summary = node.getStringValue();
				System.out.println(report.summary);
				break;
			}
			
			nodes = document.selectNodes("caaml:Bulletin/caaml:bulletinResultsOf/caaml:BulletinMeasurements/caaml:dangerRatings/caaml:DangerRating/caaml:mainValue" );
			
			for(Node node : nodes){
				report.risk = Integer.valueOf(node.getStringValue());
				System.out.println(report.risk);
				break;
			}
			
		} catch (DocumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

        JsonNode responseData = Json.toJson(report);
        return ok(responseData);

    }


}
