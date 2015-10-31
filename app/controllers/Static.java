package controllers;

import play.mvc.Controller;
import play.mvc.Result;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

/**
 * Created by adanek on 31.10.2015.
 */
public class Static extends Controller {

    public Result htmlFromFile(String file) {

        File f = new File(file);

        if (f.exists()) {

            StringBuilder sb = new StringBuilder();
            try(Scanner sc = new Scanner(f, "UTF-8")){
                while (sc.hasNextLine()) {
                    sb.append(sc.nextLine());
                }
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
            return ok(sb.toString()).as("text/html");
        } else {
            return notFound();
        }
    }
}
