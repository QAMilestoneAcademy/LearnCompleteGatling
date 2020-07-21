package starterpackage

//import
import scala.concurrent.duration._
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class OpenBrewBasic extends Simulation {
  //Create http protocol configuration
  val httpProtocol=http.baseUrl("https://api.openbrewerydb.org")

  //Create Scenario which will send http request

  val scn = scenario("find_breweries")
    .exec(http("all_breweries").get("/breweries"))
            .pause(5 seconds)
    .exec(http("get_single_brewery").get("/breweries/44"))

  //Inject Load
   setUp(scn.inject(atOnceUsers(2))).protocols(httpProtocol)

}
