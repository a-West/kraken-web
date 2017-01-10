export default class ContentService {
    constructor($resource, config,$q) {
        'ngInject';
        this.$resource = $resource;
        this.config = config;
        this.$q = $q;

        var getContent = this.$resource(this.config.getApiEndpoint() + "/content/workspaces/:workspaceId/spaces/:id/entries", {
            workspaceId: '@workspaceId',
            id: '@id'
        }, {
                'get': {
                    isArray: false,
                    method: 'GET',
                    cache: true,
                }
            });

        let getContentDetails = (id) => {
            var deferred = this.$q.defer();
            getContent.get(id).$promise
                .then((response) => {
                    deferred.resolve(response);
                }).catch((error) => {
                    throw error;
                });
            return deferred.promise;
        }

        this.getContent = getContentDetails;
        return {
            getContent: this.getContent
        }
    }
}