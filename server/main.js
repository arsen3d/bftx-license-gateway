import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    SimpleRest.setMethodOptions('transfer', {
        url: 'api/transfer',
        getArgsFromRequest: function (request) {
            const { headers } = request;

            const data = {};
            try{
                const readableState = request._readableState;
                const  buffer = readableState.buffer[0];
                const json = JSON.parse(buffer.toString('utf8'));
            }catch(err){
                console.log(err)
            }

            return [ headers, data ]
        },
        httpMethod: "post"
    });
    Meteor.methods({
        transfer(headers, data) {
            const metaData = {
                type: 'POST',
                path: 'api/transfer',
                request: {
                    headers,
                    data
                }
            };

        //add code to interface with blockchains



            return {result: 'ok'};
        }

    });

});
