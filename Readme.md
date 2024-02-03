
## set environment variables
REGION=<YOUR-REGION>
PROJECT_ID=<YOUR-PROJECT-ID>
SERVICE_NAME=sidecar-codelab
REPO_NAME=sidecar-codelab

## create arifact registry for images
gcloud artifacts repositories create $REPO_NAME --repository-format=docker \
--location=$REGION --description="sidecar codelab"


## build images and push to artifact registry
gcloud builds submit --tag $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/ingress:latest


## deploy the service using below command from yaml
gcloud beta run services replace sidecar-codelab.yaml


## check the status of the deployed service using below command
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --platform managed --region $REGION --format 'value(status.url)') 


