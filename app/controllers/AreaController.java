package controllers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.Callable;

import javax.inject.Inject;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.fasterxml.jackson.databind.JsonNode;
import com.google.common.collect.HashMultimap;
import com.google.common.collect.Multimap;

import models.AreaInfo;
import models.HotelInfo;
import models.SkiArea;
import play.cache.CacheApi;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

/**
 * Created by adanek on 10.11.2015.
 */
public class AreaController extends Controller {

	@Inject CacheApi cache;
	
	// get ski area data
	public Result getAreas() throws IOException {

    	Callable<JsonNode> areaCall = new AreaService();
    	//cache for 15 minutes (60*15)
    	JsonNode responseData = cache.getOrElse("areas", areaCall, (60*15));
    	//JsonNode responseData = cache.getOrElse(null, areaCall, 1);
	return ok(responseData);

	}



}
