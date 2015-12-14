package controllers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.Callable;

import javax.inject.Inject;

import models.*;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.fasterxml.jackson.databind.JsonNode;

import play.cache.CacheApi;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

/**
 * Created by Daniel on 11.11.2015.
 */
public class HotelController extends Controller {
	
	@Inject CacheApi cache;

    public Result getHotels(String city) throws IOException {
    	Callable<JsonNode> hotelCall = new HotelService(city);
    	//cache for 15 minutes
    	JsonNode responseData = cache.getOrElse(city, hotelCall, 60 * 15);
	return ok(responseData);
    }
}
