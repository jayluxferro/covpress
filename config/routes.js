/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /** Website **/
  'GET /':                            { view: 'pages/website/homepage' },
  'GET /services':                    { view: 'pages/website/services' },
  'GET /contact-us':                  { view: 'pages/website/contact-us' },  


  /**** API ****/
  'POST /api/session':                { action: 'website/auth/session' },
  'POST /api/request-quote':          { action: 'website/request/quote' },
  'POST /api/contact-us':             { action: 'website/request/contact-us' },

};
