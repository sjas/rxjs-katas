
/**
 * Retrieves plane information with callbacks
 *
 * @author Dr. Michael Menzel, Sencaor Technologies AG
 */

describe('E12_Call_SumPlanes', function () {

    it('that plane build count is fetched', function () {

        //get article on 777
        var article777  = wikipediaService.fetchArticle("Boeing 777");
        var buildCount777 = wikipediaService.parseBuildCount(article777.content);

        //get article on 747
        var article747 = wikipediaService.fetchArticle("Boeing 747");
        var buildCount747 = wikipediaService.parseBuildCount(article747.content);

        summary.printCounter("777 and 747", buildCount777 + buildCount747);

    });

});
