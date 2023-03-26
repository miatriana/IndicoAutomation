

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchFlights extends Page {
    /**
     * define selectors using getter methods
     */

    get btnSearch () {
        return $('button[type="search"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async search () {
        await this.btnSearch.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('search');
    }
}

module.exports = new SearchFlights();

