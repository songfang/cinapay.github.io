angular.module('templates-app', ['accounts/accounts.tpl.html', 'active/active.tpl.html', 'graph/graph.tpl.html', 'history/history.tpl.html', 'landing/landing.tpl.html', 'manage-currencies/manage-currencies.tpl.html', 'manage-gateways/manage-gateways.tpl.html', 'markets/markets.tpl.html', 'metrics/metrics.tpl.html', 'multimarkets/multimarkets.tpl.html', 'trade-volume/trade-volume.tpl.html', 'transactions/transactions.tpl.html', 'value/value.tpl.html']);

angular.module("accounts/accounts.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("accounts/accounts.tpl.html",
    "<div class=\"accounts\">\n" +
    "  <div class=\"helpbox\" ng-class=\"{showHelp : showHelp}\">\n" +
    "    <h5>Accounts Created Chart</h5>\n" +
    "    The bright blue line shows cumulative number of accounts created,\n" +
    "    with the value on the right axis. The thin line shows the accounts\n" +
    "    created per day, with the value on the left axis. Change the\n" +
    "    time range by selecting from the options at the top of the chart.\n" +
    "  </div>\n" +
    "  <h3>Accounts Created</h3>\n" +
    "  <div id=\"interval\"></div>\n" +
    "  <div id=\"totalAccounts\" data-snap-ignore=\"true\"></div>\n" +
    "</div>\n" +
    "<style>\n" +
    "  footer .footerInner {\n" +
    "    width:90% !important;\n" +
    "  }\n" +
    "</style>\n" +
    "\n" +
    "");
}]);

angular.module("active/active.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("active/active.tpl.html",
    "<div class=\"active\">\n" +
    "  \n" +
    "  <div class=\"helpbox\" ng-class=\"{showHelp : showHelp}\">\n" +
    "    <p>\n" +
    "        This visualization shows all the accounts that have been active during the time period specified. \n" +
    "        Each rectangle represents one account, and it's size is determined by\n" +
    "        that account's total volume. Scrolling over each account will display further information\n" +
    "        about it, as well as highlighting its entry in the table at the bottom of the page.\n" +
    "        \n" +
    "        In that table, each entry corresponds to an account represented in the visualization.\n" +
    "        This table offers more in depth information about each account, including the total volume, the\n" +
    "        number of trades, and a buy/sell ratio.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        Clicking on an account, either in the bottom table or the visualization, will show the breakdown of\n" +
    "        all the transactions made by that account during the specified time period. This breakdown includes\n" +
    "        the base and counter amounts and currencies, the rate they were traded at, and whether the transaction was a sell or a buy.\n" +
    "    </p>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"pairSelect\">\n" +
    "    <div id=\"base\" class=\"dropdowns\"></div>\n" +
    "    <div id=\"flip\">\n" +
    "      <img class=\"flipImg\" title=\"Flip pair\" src=\"assets/images/flip.svg\"/>\n" +
    "    </div>\n" +
    "    <div id=\"trade\" class=\"dropdowns\"></div>\n" +
    "  </div> \n" +
    "  <div id=\"activeAccounts\"></div>  \n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("graph/graph.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("graph/graph.tpl.html",
    "<!-- BEGIN VISUALIZATION DIV -->\n" +
    "<div id=\"visualization\" class=\"fullwidth graph\">\n" +
    "  <div class=\"helpWrap\">\n" +
    "    <div class=\"helpbox\" ng-class=\"{showHelp : showHelp}\">\n" +
    "      <p>\n" +
    "        The visualization shows the current account being queried and\n" +
    "        each account that it is connected to via trust lines.  The arrows\n" +
    "        at the node indicate the direction of the trust line, and the width\n" +
    "        of the line indicates the relative size of the trust line balance.\n" +
    "\n" +
    "        Clicking on a node will set it as the current node, and its additional\n" +
    "        connections will be added to the chart. Live transactions will appear\n" +
    "        as colored lines moving between nodes on the visualization. The color\n" +
    "        of the line corresponds to the type of asset sent.\n" +
    "\n" +
    "        Selecting a currency from the dropdown will show 3 colors of nodes -\n" +
    "        red nodes have a negative balance and usually represent a gateway's wallet,\n" +
    "        gray nodes have no balance in the currency selected, and\n" +
    "        colored nodes have positive balances.\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        At the bottom of the page, the table on the left shows all the balances\n" +
    "        by currency for the selected account. For currencies other than XRP, clicking\n" +
    "        on the balance will show the breakdown of each balance by trust lines for\n" +
    "        each currency. The table on the right shows the history of transactions\n" +
    "        for the selected account.\n" +
    "      </p>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "<!-- top bar -->\n" +
    "<div class=\"topbar\">\n" +
    "  <div class=\"centered\">\n" +
    "    <input id=\"focus\" type=\"text\"/>\n" +
    "    <div id=\"currencySelect\">\n" +
    "      <select id=\"currency\">\n" +
    "        <option value=\"XRP\">All Currencies</option>\n" +
    "        <option value=\"USD\">USD - U.S. Dollars</option>\n" +
    "        <option value=\"EUR\">EUR - Euro</option>\n" +
    "        <option value=\"CNY\">CNY - Chinese Yuan</option>\n" +
    "        <option value=\"JPY\">JPY - Japanese Yen</option>\n" +
    "        <option value=\"BTC\">BTC - Bitcoins</option>\n" +
    "        <option value=\"___\">Other</option>\n" +
    "      </select>\n" +
    "      <input type=\"text\" id=\"otherCurrency\" value=\"other\" class=\"sbSelector sbHolder\" />\n" +
    "    </div>\n" +
    "    <input id=\"searchButton\" type=\"button\" value=\"Go\"/>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"zoom\">\n" +
    "  <input type=\"button\" id=\"zoomOutButton\" value=\"&ndash;\"/>\n" +
    "  <input type=\"button\" id=\"zoomInButton\"  value=\"+\" disabled=\"disabled\"/>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"light large loading\" style=\"color:#aaa; position:absolute; width:100%; top:300px; line-height:50px; text-align:center;\">\n" +
    "  <img class=\"loader\" src=\"assets/images/rippleThrobber.png\" style=\"vertical-align: middle;\"/>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<!-- begin information below -->\n" +
    "<div id=\"information\">\n" +
    "<div class=\"tab midsize mediumgray unselectedTab\" style=\"margin-top:-36px; margin-left:140px;\" id=\"feedTab\">Network feed</div>\n" +
    "<div id=\"individualTab\" class=\"tab midsize mediumgray selectedTab\" style=\"margin-top:-35px; margin-left:-1px;\">Wallet info</div>\n" +
    "<div id=\"focalAddress\" class=\"light mediumgray large\" style=\"margin-bottom:13px; margin-top:13px; padding-left:20px; float:left;\">&nbsp;</div>\n" +
    "<div class=\"clearboth\"></div>\n" +
    "\n" +
    "<div class=\"fullwidth topbordered horizontalrule\"></div>\n" +
    "<div class=\"light midsize mediumgray\" id=\"leftHeading\" style=\"width:50%; border: none; float:left; padding-left:20px;\">Balances</div>\n" +
    "<div class=\"light midsize mediumgray\" id=\"rightHeading\" style=\"border:none; float:left;\">History</div>\n" +
    "<div class=\"clearboth\"></div>\n" +
    "<div class=\"fullwidth bottombordered horizontalrule\"></div>\n" +
    "\n" +
    "<!-- the table on the left -->\n" +
    "<div class=\"bottomlist rightbordered\" style=\"width:49%; float:left;\">\n" +
    "  <div class=\"scroll-pane\" id=\"transactionInformationContainer\" style=\"z-index:5; display:none;\">\n" +
    "    <div style=\"width:100%; overflow-x:hidden;\">\n" +
    "      <div id=\"transactionInformation\" class=\"light midsize mediumgray\" style=\"width:100%%; padding:20px; display:none;\"></div>\n" +
    "      <div id=\"transactionFeed\" class=\"light midsize mediumgray\" style=\"width:100%; padding:20px; display:none;\">\n" +
    "        <table id=\"transactionFeedTable\"></table>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"scroll-pane\" style=\"height:288px; margin-left:10px;\">\n" +
    "    <table style=\"width:100%; margin-top:4px;\" class=\"outertable\" id=\"balanceTable\"></table>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- the table on the right -->\n" +
    "<div class=\"bottomlist\" style=\"width:50%; float:right;\">\n" +
    "  <div class=\"scroll-pane\" style=\"height:288px;width:100%; \">\n" +
    "    <table class=\"outertable\" id=\"transactionTable\"></table>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"clearboth\"></div>\n" +
    "\n" +
    "</div><!-- end information at the bottom -->\n" +
    "\n" +
    "</div><!-- END VISUALIZATION DIV -->\n" +
    "");
}]);

angular.module("history/history.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("history/history.tpl.html",
    "<div class=\"history-page\">\n" +
    "\n" +
    "  <div class=\"helpbox\" ng-class=\"{showHelp : showHelp}\">\n" +
    "    <h4>Historical Metrics</h4>\n" +
    "    <p>\n" +
    "      This chart shows trends for various currencies available on the Ripple Network. Each metric can be broken down into further detail by clicking on its entry in the legend below the graph. Once a currency has been chosen for an in depth view, the legend shows the name of the gateway, its issuing address and the counter currency if applicable. Gateways are grouped by currency for comparison. The time range and increment can be chosen from the top right. All values are normalized to the currency chosen in the dropdown menu on the top left, USD being the default.\n" +
    "    </p>\n" +
    "\n" +
    "    <div class=\"table\">\n" +
    "      <div class=\"cell\">\n" +
    "      <h5>Total Volume</h5>\n" +
    "      <p>\n" +
    "        The initial Total Volume chart shows the aggregate volume of both total transaction and trade volume. The legend at the bottom allows a deeper view into each of those metrics.\n" +
    "      </p>\n" +
    "      </div>\n" +
    "      <div class=\"cell\">\n" +
    "      <h5>Payment Volume</h5>\n" +
    "      <p>\n" +
    "        The payment volume chart shows the amounts sent through payments and offers\n" +
    "        exercised for each currency. The legend at the bottom allows a deeper view into how that volume breaks down into different gateways.\n" +
    "      </p>\n" +
    "      </div>\n" +
    "      <div class=\"cell\">\n" +
    "      <h5>Trade Volume</h5>\n" +
    "      <p>\n" +
    "        The trade volume chart shows the aggregate volume of trade between each currency\n" +
    "        and XRP. The legend at the bottom allows a deeper view into how that volume breaks down into different gateways.\n" +
    "      </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"control\">\n" +
    "    <div id=\"breadcrumb\">\n" +
    "      <ul class=\"crumbs\">\n" +
    "        <li class=\"crumb\" id=\"totals\">Total Volume</li>\n" +
    "      </ul>\n" +
    "      <a id=\"csv\" disabled=\"true\" title=\"Export to CSV\">\n" +
    "        <img class=\"downloadIcon toCSV\" src=\"assets/images/download_icn.svg\"/>\n" +
    "      </a>\n" +
    "      <div id=\"currency\">\n" +
    "        <div class=\"tag\">Valued in:</div>\n" +
    "        <select class=\"valueCurrencySelect\">\n" +
    "          <option value=\"USD\">USD</option>\n" +
    "          <option value=\"XRP\">XRP</option>\n" +
    "          <option value=\"BTC\">BTC</option>\n" +
    "          <option value=\"EUR\">EUR</option>\n" +
    "          <option value=\"CNY\">CNY</option>\n" +
    "          <option value=\"JPY\">JPY</option>\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"interval\">\n" +
    "      <div id=\"intervals\">\n" +
    "        <div class=\"tag\">Interval:</div>\n" +
    "        <a id=\"month\" class=\"int\"> months </a>\n" +
    "        <a id=\"week\" class=\"int\"> weeks </a>\n" +
    "        <a id=\"day\" class=\"int clicked\"> days </a>\n" +
    "      </div>\n" +
    "      <div id=\"ranges\">\n" +
    "        <div class=\"tag\">Range:</div>\n" +
    "        <input type=\"text\" class=\"ui-datepicker calendar\" id=\"datepicker_from\">\n" +
    "        <input type=\"text\" class=\"ui-datepicker calendar\" id=\"datepicker_to\">\n" +
    "        <a id=\"1m\" class=\"range clicked\">1M</a>\n" +
    "        <a id=\"3m\" class=\"range\">3m</a>\n" +
    "        <a id=\"6m\" class=\"range\">6m</a>\n" +
    "        <a id=\"1y\" class=\"range\">1y</a>\n" +
    "        <a id=\"max\" class=\"range\">max</a>\n" +
    "        <a id=\"custom\">custom</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "   <div class=\"chart_wrapper\">\n" +
    "    <img class=\"throbber loader loading\" src=\"assets/images/rippleThrobber.png\">\n" +
    "    <canvas id=\"canvas\"></canvas>\n" +
    "  </div>\n" +
    "  <div id=\"lineLegend\"></div>\n" +
    "  <div id=\"tooltip\">\n" +
    "    <div class=\"title\"></div>\n" +
    "    <div class=\"iss\"></div>\n" +
    "    <div class=\"date\"></div>\n" +
    "    <div class=\"value\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<style>\n" +
    "  footer .footerInner {\n" +
    "    width:90% !important;\n" +
    "  }\n" +
    "</style>\n" +
    "");
}]);

angular.module("landing/landing.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("landing/landing.tpl.html",
    "<div>\n" +
    "  <div class=\"main container landing\">\n" +
    "    <div class=\"helpbox\" ng-class=\"{showHelp : showHelp}\">\n" +
    "      <h3>Welcome to Ripple Charts</h3>\n" +
    "      <p>\n" +
    "        This charting site was built by Ripple to provide live and historical data about\n" +
    "        the Ripple network. This site is open for anyone to use, alter and embed.  The source\n" +
    "        code is available <a href=\"https://github.com/ripple/ripplecharts-frontend\" target=\"_blank\">here</a>.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6 stats\">\n" +
    "        <h5>\n" +
    "          Ripple Network Stats\n" +
    "          <select id=\"valueCurrency\" class=\"valueCurrencySelect\"></select>\n" +
    "          <span class=\"valueRateDisplay\" ng-bind=\"valueRateDisplay\"></span>\n" +
    "        </h5>\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            <label>XRP Capitalization:</label>\n" +
    "            <div class=\"stat\">\n" +
    "              <span ng-show=\"valueRate\" ng-bind=\"xrpCapitalization\"></span>\n" +
    "              <img  ng-hide=\"xrpCapitalization\" src=\"assets/images/rippleThrobber.png\" class=\"loader\"/>\n" +
    "            </div>\n" +
    "            <div class=\"details\"></div>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <label>Issued Value:</label>\n" +
    "            <div class=\"stat\">\n" +
    "              <span ng-show=\"valueRate\" ng-bind=\"issuedValue\"></span>\n" +
    "              <img  ng-hide=\"issuedValue\" src=\"assets/images/rippleThrobber.png\" class=\"loader\"/>\n" +
    "            </div>\n" +
    "            <div class=\"details\">\n" +
    "              <div ng-show=\"issuedValue && issuedValue != ' '\" ng-click=\"metricDetail='issuedValue'\" ng-class=\"{selected : metricDetail == 'issuedValue' }\">\n" +
    "                Detail\n" +
    "                <img src=\"assets/images/triangle.svg\"/>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <label>24hr Payment Volume:</label>\n" +
    "            <div class=\"stat\">\n" +
    "              <span ng-show=\"valueRate\" ng-bind=\"paymentVolume\"></span>\n" +
    "              <img  ng-hide=\"paymentVolume\" src=\"assets/images/rippleThrobber.png\" class=\"loader\"/>\n" +
    "            </div>\n" +
    "            <div class=\"details\">\n" +
    "              <div ng-show=\"paymentVolume && paymentVolume != ' '\" ng-click=\"metricDetail='paymentVolume'\" ng-class=\"{selected : metricDetail == 'paymentVolume' }\">\n" +
    "                Detail\n" +
    "                <img src=\"assets/images/triangle.svg\"/>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <label>24hr Trade Volume:</label>\n" +
    "            <div class=\"stat\">\n" +
    "              <span ng-show=\"valueRate\" ng-bind=\"tradeVolume\"></span>\n" +
    "              <img  ng-hide=\"tradeVolume\" src=\"assets/images/rippleThrobber.png\" class=\"loader\"/>\n" +
    "            </div>\n" +
    "            <div class=\"details\">\n" +
    "              <div ng-show=\"tradeVolume && tradeVolume != ' '\" ng-click=\"metricDetail='tradeVolume'\" ng-class=\"{selected : metricDetail == 'tradeVolume' }\">\n" +
    "                Detail\n" +
    "                <img src=\"assets/images/triangle.svg\"/>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <label>Total XRP:</label>\n" +
    "            <div class=\"stat\">\n" +
    "              <span ng-bind=\"totalCoins\"></span>\n" +
    "              <img ng-hide=\"totalCoins\" src=\"assets/images/rippleThrobber.png\" class=\"loader\"/>\n" +
    "            </div>\n" +
    "            <div class=\"details\"></div>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <label>Ledger #:</label>\n" +
    "            <div class=\"stat\">\n" +
    "              <span ng-bind=\"ledgerIndex\"></span>\n" +
    "              <img ng-hide=\"ledgerIndex\" src=\"assets/images/rippleThrobber.png\" class=\"loader\"/>\n" +
    "            </div>\n" +
    "            <div class=\"details\"></div>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <label># of Ripple accounts:</label>\n" +
    "            <div class=\"stat\">\n" +
    "              <span ng-bind=\"totalAccounts\"></span>\n" +
    "              <img ng-hide=\"totalAccounts\" src=\"assets/images/rippleThrobber.png\" class=\"loader\"/>\n" +
    "            </div>\n" +
    "            <div class=\"details\"></div>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <h5>\n" +
    "          <span ng-bind=\"metricDetailTitle\"></span>\n" +
    "          <a class=\"explore\" href=\"#/trade-volume\" ng-show=\"metricDetail === 'tradeVolume'\">Explore</a>\n" +
    "        </h5>\n" +
    "        <div id=\"metricDetail\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <h5>Top Markets</h5>\n" +
    "    <div id=\"topMarkets\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("manage-currencies/manage-currencies.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("manage-currencies/manage-currencies.tpl.html",
    "<div class=\"manage_currencies manage_wrapper\">\n" +
    "  <div class=\"sub_nav\">\n" +
    "    <div class=\"container\">\n" +
    "      <ul class=\"manage-menu\">\n" +
    "        <li ui-route=\"/manage-currency\" ng-class=\"{active:$uiRoute !== false}\" class=\"menu-manage-currency\"><a href=\"#/manage-currency\">Manage Currencies</a></li>\n" +
    "        <li ui-route=\"/manage-gateway\" ng-class=\"{active:$uiRoute !== false}\" class=\"menu-manage-gateway\"><a href=\"#/manage-gateway\">Manage Gateways</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"helpbox container\" ng-class=\"{showHelp : showHelp}\">\n" +
    "    <h5>Manage Currencies</h5>\n" +
    "    <p>A list of standard currencies supported by ripplecharts.com is listed below. Selected currencies will appear in the ‘Manage Gateways’ tab where gateways can be associated with the selected currencies. Custom currencies can be added with the “Add other currencies manually” field below.</p>\n" +
    "    <p>Custom currencies are saved in the browser's local storage. Clearing the cache or accessing ripplecharts.com on a different browser or device will restore ripplecharts.com to the default settings.</p>\n" +
    "  </div>\n" +
    "  <div class=\"container manage\">\n" +
    "\n" +
    "    <h5>Standard Currencies</h5>\n" +
    "    <div id=\"curr_list\">\n" +
    "      <div class=\"col-md-6 first_column\"></div>\n" +
    "      <div class=\"col-md-6 second_column\"></div>\n" +
    "    </div>\n" +
    "    <hr>\n" +
    "\n" +
    "    <h5>Add other currencies manually</h5> \n" +
    "      <input placeholder=\"Currency Code\" maxlength=\"3\" class=\"manual\" type=\"text\" id=\"txtName\" />\n" +
    "      <input type=\"button\" value=\"Add\" id=\"btnAdd\" class=\"submit btn\" />\n" +
    "      <span class=\"description\"></span>\n" +
    "      <div class=\"col-md-6 clear\">\n" +
    "        <div id=\"currencyList\"></div>\n" +
    "      </div>\n" +
    "    <span class=\"saved\">Saved.</span>\n" +
    "    <a class=\"backMarkets\" href=\"#/markets\"> &#8592; Back to Live Markets </a>\n" +
    "   \n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "<style>\n" +
    "  footer .footerInner {\n" +
    "    width:90% !important;\n" +
    "  }\n" +
    "</style>\n" +
    "\n" +
    "");
}]);

angular.module("manage-gateways/manage-gateways.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("manage-gateways/manage-gateways.tpl.html",
    "<div class=\"manage_gateways manage_wrapper\">\n" +
    "  <div class=\"sub_nav\">\n" +
    "    <div class=\"container\">\n" +
    "      <ul class=\"manage-menu\">\n" +
    "        <li ui-route=\"/manage-currency\" ng-class=\"{active:$uiRoute !== false}\" class=\"menu-manage-currency\"><a href=\"#/manage-currency\">Manage Currencies</a></li>\n" +
    "        <li ui-route=\"/manage-gateway\" ng-class=\"{active:$uiRoute !== false}\" class=\"menu-manage-gateway\"><a href=\"#/manage-gateway\">Manage Gateways</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"helpbox container\" ng-class=\"{showHelp : showHelp}\">\n" +
    "    <h5>Featured Gateways</h5>\n" +
    "    <p>Select a currency and manage the gateways associated for the currency drop down for the ‘Live Chart’ page.  A list of featured gateways are listed along with a list of other gateways supported by ripplecharts.com for each currency. Custom gateways that are not listed by default can be added with the “Add gateways manually” field below.</p>\n" +
    "    <p>Customizations such as gateway currency pairs and custom gateways are saved in the browser's local storage. Clearing the cache or accessing ripplecharts.com on a different browser or device will restore ripplecharts.com to the default settings.</p>\n" +
    "  </div>\n" +
    "  <div class=\"container manage\">\n" +
    "    <h5>Select curency to manage gateways for that curency.</h5>\n" +
    "       <div id=\"dropdown\"></div>\n" +
    "      <div id=\"quote\" class=\"dropdowns\"></div>\n" +
    "    <h5>Featured Gateways</h5>\n" +
    "      <div id=\"irba_gateway_curr_list\"></div>\n" +
    "      Contact <a href=\"mailto:support@ripple.com\">support@ripple.com</a> about becoming a featured gateway.\n" +
    "    <hr>\n" +
    "    <h5>Other gateways</h5>\n" +
    "    <div id=\"gateway_curr_list\"></div>\n" +
    "    <hr>\n" +
    "    <h5>Add gateways manually</h5>\n" +
    "      <input placeholder=\"Ripple Address or Name\" class=\"manual\" type=\"text\" id=\"txtName\" />\n" +
    "      <input type=\"button\" value=\"Add\" id=\"btnAdd\" class=\"submit btn\" />\n" +
    "      <p class=\"description\"></p>\n" +
    "      <div class=\"col-md-6 clear\">\n" +
    "          <div id=\"custom_gateway_list\"></div>\n" +
    "      </div>\n" +
    "    <span class=\"saved\">Saved.</span>\n" +
    "\n" +
    "    <a class=\"backMarkets\" href=\"#/markets\"> &#8592; Back to Live Markets </a>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "<style>\n" +
    "  footer .footerInner {\n" +
    "    width:90% !important;\n" +
    "  }\n" +
    "</style>\n" +
    "\n" +
    "");
}]);

angular.module("markets/markets.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("markets/markets.tpl.html",
    "<div class=\"markets row\">\n" +
    "  <div class=\"col-md-3\">\n" +
    "    <div class=\"helpbox\" ng-class=\"{showHelp : showHelp}\">\n" +
    "      <h5>Live Trade Feed</h5>\n" +
    "      <p>\n" +
    "        The live trade feed shows the most recent trades for the\n" +
    "        selected currency pair, the latest trade price and\n" +
    "        the 24 hour high, low, and volume.\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        The large number at the top is the latest trade price.\n" +
    "        Currency prices are always quoted in relation to one another, e.g. XRP/USD.\n" +
    "        The first currency in the pair is called the \"base currency\".\n" +
    "        The second one is called the \"counter currency\". The price quote shows\n" +
    "        the value of 1 unit of base currency in terms of the counter currency.\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        The table below is a real-time ticker of the latest trades.\n" +
    "        The colored bar shows if the trade price was higher, lower or the\n" +
    "        same as the previous trade listed directly below. The left column shows the\n" +
    "        amount traded and the right column shows the trade price.\n" +
    "      </p>\n" +
    "      <table>\n" +
    "        <tr><td class=\"type ask\"></td><th>Higher than previous price</th></tr>\n" +
    "        <tr><td class=\"type bid\"></td><th>Lower than previous price</th></tr>\n" +
    "        <tr><td class=\"type\"></td><th>Same as previous price</th></tr>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "    <div class=\"rippleStatus\">\n" +
    "          <div class=\"items\">\n" +
    "            <div class=\"label\" ng-bind=\"ledgerLabel\"></div>\n" +
    "            <div class=\"index\" ng-bind=\"ledgerIndex\">--</div>\n" +
    "            <div class=\"status\">\n" +
    "              <svg height=\"20\" width=\"20\" ng-class=\"connectionStatus\">\n" +
    "                <circle cx=\"10\" cy=\"10\" r=\"5\" fill=\"#c00\" />\n" +
    "              </svg>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "    <div id=\"tradeFeed\"></div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"wrap col-md-9\">\n" +
    "    <div class=\"helpbox\" ng-class=\"{showHelp : showHelp}\">\n" +
    "      <h5>Live Market Data</h5>\n" +
    "      <p>\n" +
    "        The dropdowns allow you to select a base currency and a counter currency.\n" +
    "        Select the currency first, and the issuer dropdown will update to show\n" +
    "        which issuers are available for the selected currency. On the right side,\n" +
    "        the current ledger number is represented, followed by a circle which\n" +
    "        indicates whether or not Ripple Charts is currently connected to the\n" +
    "        Ripple Network real time feed.\n" +
    "      </p>\n" +
    "         <table>\n" +
    "          <tr>\n" +
    "            <td class=\"rippleStatus\">\n" +
    "              <svg height=\"20\" width=\"20\" class=\"connected\">\n" +
    "                <circle cx=\"10\" cy=\"10\" r=\"5\" fill=\"#c00\" />\n" +
    "              </svg>\n" +
    "            </td>\n" +
    "            <th>Connected to the Ripple Network</th>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td class=\"rippleStatus\">\n" +
    "              <svg height=\"20\" width=\"20\">\n" +
    "                <circle cx=\"10\" cy=\"10\" r=\"5\" fill=\"#c00\" />\n" +
    "              </svg>\n" +
    "            </td>\n" +
    "            <th>Disconnected from the Ripple Network</th>\n" +
    "          </tr>\n" +
    "        </table>\n" +
    "      <p>\n" +
    "        This chart below shows price change over time. Grey bars in the\n" +
    "        background represent trade volume for that time period. In the top left,\n" +
    "        select time intervals between each data point. The displayed time range will\n" +
    "        automatically adjust based on which interval you select.  At the top right\n" +
    "        you can select between line or candlestick display.\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        Hover your mouse over the chart to see open, high, low, and close values\n" +
    "        for each of the data points.  To download a csv file of the data from the\n" +
    "        current chart, click the <img class=\"downloadIcon\" src=\"assets/images/download_icn.svg\" /> icon to\n" +
    "        the right of the currency dropdowns.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"controls\">\n" +
    "      <div id=\"currencyPair\">\n" +
    "\n" +
    "        <div class=\"sub\">\n" +
    "          <div id=\"base\" class=\"dropdowns\"></div>\n" +
    "          <div id=\"flip\">\n" +
    "            <img class=\"flipImg\" title=\"Flip pair\" src=\"assets/images/flip.svg\"/>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"sub\">\n" +
    "          <div id=\"counter\" class=\"dropdowns\"></div>\n" +
    "          <a id=\"toCSV\" disabled=\"true\" title=\"Export to CSV\">\n" +
    "            <img class=\"downloadIcon\" src=\"assets/images/download_icn.svg\"/>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"rangeIntervalWrapper\">\n" +
    "        <div id=\"range\" class=\"selectList\"><label>Range:</label></div>\n" +
    "        <div id=\"interval\" class=\"selectList\"><label>Interval:</label></div>\n" +
    "      </div>\n" +
    "      <div class=\"chartTypeWrapper\">\n" +
    "        <div id=\"chartType\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div id=\"priceChart\" data-snap-ignore=\"true\"></div>\n" +
    "    <div class=\"helpbox\" ng-class=\"{showHelp : showHelp}\">\n" +
    "      <h5>Order Book</h5>\n" +
    "      <p>\n" +
    "        The current order book for the selected currency pair is below -\n" +
    "        these are orders across the Ripple Network that have been placed\n" +
    "        but not yet filled. \"Bids\" are orders to buy the base currency, and\n" +
    "        \"Asks\" are orders to sell the base currency. The “Total” column shows\n" +
    "        the total amount of currency anyone can get at that price. The \"Size\"\n" +
    "        columns show the amount of base currency available to buy or sell at\n" +
    "        \"Bid Price\" or \"Ask Price.\" The blue line shows the depth of the order\n" +
    "        book - the amount of base currency available at different rates. The\n" +
    "        vertical line represents the midpoint between the best bid and ask price\n" +
    "        which is the current market price.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div id=\"bookChart\"  data-snap-ignore=\"true\"></div>\n" +
    "    <div id=\"bookTables\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<style>\n" +
    "  footer .footerInner {\n" +
    "    width:94% !important;\n" +
    "    padding:10px 3% !important;\n" +
    "  }\n" +
    "</style>\n" +
    "");
}]);

angular.module("metrics/metrics.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("metrics/metrics.tpl.html",
    "<div class=\"metrics\">\n" +
    "  <h3>Transactions</h3>\n" +
    "  <div class=\"helpbox\" ng-class=\"{showHelp : showHelp}\">\n" +
    "    This graph shows the number of transactions per day over time.\n" +
    "  </div>\n" +
    "  <div id=\"tx-count\" class=\"chartWrap\" data-snap-ignore=\"true\"></div>\n" +
    "  <h3>Ledgers</h3>\n" +
    "  <div class=\"helpbox\" ng-class=\"{showHelp : showHelp}\">\n" +
    "    This graph shows the number of ledgers per day over time.\n" +
    "  </div>\n" +
    "  <div id=\"ledger-count\" class=\"chartWrap\" data-snap-ignore=\"true\"></div>\n" +
    "  <h3>Ledger Close Interval</h3>\n" +
    "  <div class=\"helpbox\" ng-class=\"{showHelp : showHelp}\">\n" +
    "    This graph shows the average time interval between ledger closes each day.\n" +
    "  </div>\n" +
    "  <div id=\"ledger-interval\" class=\"chartWrap\" data-snap-ignore=\"true\"></div>\n" +
    "  <h3>Payments</h3>\n" +
    "  <div class=\"helpbox\" ng-class=\"{showHelp : showHelp}\">\n" +
    "    This graph shows the number of payments per day over time.  The number\n" +
    "    includes only payments that were sent to a different destination account.\n" +
    "  </div>\n" +
    "  <div id=\"payment-count\" class=\"chartWrap\" data-snap-ignore=\"true\"></div>\n" +
    "  <h3>Exchanges</h3>\n" +
    "  <div class=\"helpbox\" ng-class=\"{showHelp : showHelp}\">\n" +
    "    This graph shows the number of exchanges per day over time.\n" +
    "  </div>\n" +
    "  <div id=\"exchange-count\" class=\"chartWrap\" data-snap-ignore=\"true\"></div>\n" +
    "</div>\n" +
    "<style>\n" +
    "  footer .footerInner {\n" +
    "    width:90% !important;\n" +
    "  }\n" +
    "</style>\n" +
    "");
}]);

angular.module("multimarkets/multimarkets.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("multimarkets/multimarkets.tpl.html",
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"main mmpage\">\n" +
    "    <div id=\"multimarkets\">\n" +
    "      <div class=\"helpbox\" ng-class=\"{showHelp : showHelp}\">\n" +
    "       <h5>Multi Market Charts</h5>\n" +
    "       <p>\n" +
    "         Each chart is a 24 hour snapshot of the selected currency pair. the\n" +
    "         chart color indicates whether the price has moved up, down, or remained\n" +
    "         unchanged over the last 24 hours.  The middle line and number indicates\n" +
    "         the current price.  Click on any chart to see the live market data for \n" +
    "         that currency pair. These charts update every 60 seconds with the latest\n" +
    "         data from the Ripple Network.\n" +
    "       </p>\n" +
    "       <p>\n" +
    "         Add new charts by clicking the \"+\" button, or remove them by clicking the\n" +
    "         \"x\" button at the top right of each chart.  You can change currencies by\n" +
    "         selecting from the dropdowns at the bottom of the chart, and reverse the \n" +
    "         order by clicking the \"Flip\" button.\n" +
    "       </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<style>\n" +
    "  footer .footerInner {\n" +
    "    width:96% !important;\n" +
    "  }\n" +
    "</style>\n" +
    "\n" +
    "");
}]);

angular.module("trade-volume/trade-volume.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("trade-volume/trade-volume.tpl.html",
    "<div class=\"trade-volume\">\n" +
    "  <div class=\"helpbox\" ng-class=\"{showHelp : showHelp}\">\n" +
    "    <h4>Trade Volume</h4>\n" +
    "    <p>\n" +
    "The trade volume chart represents the trade volume for a curated list of markets on the Ripple Network. The 'Live' option shows data from the last 24 hours, updated every 5 minutes. The 'Historical' option shows data for the selected date, UTC time.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "Each currency traded is represented by an arc on the outer circle, with its length representing its volume relative to all others on the circle. Hover over the name of a currency or its arc to highlight that currency's portion of exchange volume. The chord between two arcs represents the relative volume of exchanges between the currencies at each end. Hover over one of these chords to highlight that market exclusively.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "The column on the left shows the number of exchanges and the total volume traded, normalized to the display currency. Filter the currencies shown here by clicking the name or arc of that currency.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "The right column shows volume data for all currencies, a single currency, or a single market, depending on highlighting. Data includes the total volume for the currency/pair normalized to the display currency, the total volume in nominal terms, a count of exchanges, and a percentage of the total volume. The total percentage adds up to 200%, because there are always two currencies represented in each trade.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "  <div class=\"source\">\n" +
    "    <div class=\"live\">\n" +
    "      <input type=\"radio\" id=\"live-source\" ng-model=\"source.type\" class=\"source-select\" value=\"live\"/>\n" +
    "      <label for=\"live-source\">Live (Last 24 hours)</label>\n" +
    "    </div>\n" +
    "    <div class=\"history\">\n" +
    "      <input type=\"radio\" id=\"history-source\" ng-model=\"source.type\" class=\"source-select\" value=\"history\"/>\n" +
    "      <label for=\"history-source\">Historical</label>\n" +
    "      <input id=\"datepicker\"/>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <chord-diagram></chord-diagram>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("transactions/transactions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("transactions/transactions.tpl.html",
    "<div class=\"transactions\">\n" +
    "  <div class=\"column column1\">\n" +
    "    <txfeed></txfeed>\n" +
    "  </div>\n" +
    "  <div class=\"column column2\">\n" +
    "    <div class=\"tx-input\">\n" +
    "      <input type=\"text\" ng-model=\"input_tx_hash\" placeholder=\"enter a transaction hash\"/>\n" +
    "      <button type=\"button\" ng-click=\"load()\">GO</button>\n" +
    "    </div>\n" +
    "    <txsplain></txsplain>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("value/value.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("value/value.tpl.html",
    "<div class=\"valueWrap\">\n" +
    "  <div class=\"helpbox\" ng-class=\"{showHelp : showHelp}\">\n" +
    "    <h4>Value Trends</h4>\n" +
    "    <p>\n" +
    "      This chart shows trends for various currencies available on the Ripple Network.  Gateways are \n" +
    "      grouped by currency for comparison. Each gateway can be toggled on or off by clicking on its entry \n" +
    "      in the legend below the graph.  The legend shows the name of the gateway and its issuing address.\n" +
    "      The format of the graph can be changed between a line graph and a stacked area graph and \n" +
    "      time range can be selected from the list on the right.\n" +
    "    </p>\n" +
    "    \n" +
    "    <div class=\"table\">\n" +
    "      <div class=\"cell\">\n" +
    "        <h5>Gateway Capitalization</h5>\n" +
    "        <p>\n" +
    "          The gateway capitalization chart shows the changing balances of gateways on the Ripple \n" +
    "          Network for the selected currency.  The legend at the bottom includes the gateway's \n" +
    "          current balance.\n" +
    "        </p>        \n" +
    "      </div>\n" +
    "      <div class=\"cell\">\n" +
    "        <h5>Transaction Volume</h5>\n" +
    "        <p>\n" +
    "          The transaction volume chart shows the amounts sent through payments and offers \n" +
    "          exercised for the selected currency.  This chart adds the option of XRP to the currency \n" +
    "          dropdown.\n" +
    "        </p>        \n" +
    "      </div>\n" +
    "      <div class=\"cell\">\n" +
    "        <h5>Trade Volume</h5>\n" +
    "        <p>\n" +
    "          The trade volume chart shows the volume of trade between the selected currency \n" +
    "          and XRP for each gateway that issues the selected currency.\n" +
    "        </p>  \n" +
    "      </div>\n" +
    "    </div>\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "<div id=\"valueChart\" data-snap-ignore=\"true\"></div>");
}]);
