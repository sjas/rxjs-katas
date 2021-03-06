/**
 * @author Dr. Michael Menzel, Senacor Technologies AG
 */
describe('Map Example', function () {

   it('that the stream is transformed', function (done) {
      Rx.Observable.from(["Michael", "Andreas"])
         .map(function(firstName){
            return "vorname=" + firstName;
         })
         .subscribe(
            function(next) {console.log("next: " + next) },
            function(error) {console.log("error: " + error) },
            function() {
               console.log("complete!");
               done();
            }
         );
   });


});