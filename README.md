# franken_spec

NodeSdk - JavaScript client for franken_spec
Bandwidth's Frankensteined API Spec
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Creation
`openapi-generator-cli generate -g javascript -i megaSpecNew.json -o ./openapi-js-sdk -c config-node.yml`
## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install franken_spec --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your franken_spec from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var NodeSdk = require('franken_spec');

var defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
var httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME'
httpBasic.password = 'YOUR PASSWORD'

var api = new NodeSdk.CallsApi()
var accountId = "accountId_example"; // {String} 
var createCallRequest = new NodeSdk.CreateCallRequest(); // {CreateCallRequest} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createCall(accountId, createCallRequest, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*NodeSdk.CallsApi* | [**createCall**](docs/CallsApi.md#createCall) | **POST** /api/v2/accounts/{accountId}/calls | Create Call
*NodeSdk.CallsApi* | [**getCall**](docs/CallsApi.md#getCall) | **GET** /api/v2/accounts/{accountId}/calls/{callId} | Get Call Information
*NodeSdk.CallsApi* | [**modifyCall**](docs/CallsApi.md#modifyCall) | **POST** /api/v2/accounts/{accountId}/calls/{callId} | Update Call
*NodeSdk.ConferencesApi* | [**downloadConferenceRecording**](docs/ConferencesApi.md#downloadConferenceRecording) | **GET** /api/v2/accounts/{accountId}/conferences/{conferenceId}/recordings/{recordingId}/media | Download Recording
*NodeSdk.ConferencesApi* | [**getConference**](docs/ConferencesApi.md#getConference) | **GET** /api/v2/accounts/{accountId}/conferences/{conferenceId} | Get Conference Information
*NodeSdk.ConferencesApi* | [**getConferenceMember**](docs/ConferencesApi.md#getConferenceMember) | **GET** /api/v2/accounts/{accountId}/conferences/{conferenceId}/members/{memberId} | Get Member Information
*NodeSdk.ConferencesApi* | [**getConferenceRecording**](docs/ConferencesApi.md#getConferenceRecording) | **GET** /api/v2/accounts/{accountId}/conferences/{conferenceId}/recordings/{recordingId} | Get Recording Information
*NodeSdk.ConferencesApi* | [**getConferenceRecordings**](docs/ConferencesApi.md#getConferenceRecordings) | **GET** /api/v2/accounts/{accountId}/conferences/{conferenceId}/recordings | Get Conference Recordings
*NodeSdk.ConferencesApi* | [**getConferences**](docs/ConferencesApi.md#getConferences) | **GET** /api/v2/accounts/{accountId}/conferences | Get Conferences
*NodeSdk.ConferencesApi* | [**modifyConference**](docs/ConferencesApi.md#modifyConference) | **POST** /api/v2/accounts/{accountId}/conferences/{conferenceId} | Update Conference
*NodeSdk.ConferencesApi* | [**modifyConferenceMember**](docs/ConferencesApi.md#modifyConferenceMember) | **PUT** /api/v2/accounts/{accountId}/conferences/{conferenceId}/members/{callId} | Update Member
*NodeSdk.MFAApi* | [**messagingTwoFactor**](docs/MFAApi.md#messagingTwoFactor) | **POST** /accounts/{accountId}/code/messaging | Messaging Authentication
*NodeSdk.MFAApi* | [**verifyTwoFactor**](docs/MFAApi.md#verifyTwoFactor) | **POST** /accounts/{accountId}/code/verify | Verify Authentication Code
*NodeSdk.MFAApi* | [**voiceTwoFactor**](docs/MFAApi.md#voiceTwoFactor) | **POST** /accounts/{accountId}/code/voice | Voice Authentication
*NodeSdk.MediaApi* | [**deleteMedia**](docs/MediaApi.md#deleteMedia) | **DELETE** /users/{accountId}/media/{mediaId} | Delete Media
*NodeSdk.MediaApi* | [**getMedia**](docs/MediaApi.md#getMedia) | **GET** /users/{accountId}/media/{mediaId} | Get Media
*NodeSdk.MediaApi* | [**listMedia**](docs/MediaApi.md#listMedia) | **GET** /users/{accountId}/media | List Media
*NodeSdk.MediaApi* | [**uploadMedia**](docs/MediaApi.md#uploadMedia) | **PUT** /users/{accountId}/media/{mediaId} | Upload Media
*NodeSdk.MessagesApi* | [**createMessage**](docs/MessagesApi.md#createMessage) | **POST** /users/{accountId}/messages | Create Message
*NodeSdk.MessagesApi* | [**getMessages**](docs/MessagesApi.md#getMessages) | **GET** /users/{accountId}/messages | Get Messages
*NodeSdk.ParticipantsApi* | [**createParticipant**](docs/ParticipantsApi.md#createParticipant) | **POST** /accounts/{accountId}/participants | Create Participant
*NodeSdk.ParticipantsApi* | [**deleteParticipant**](docs/ParticipantsApi.md#deleteParticipant) | **DELETE** /accounts/{accountId}/participants/{participantId} | Delete Participant
*NodeSdk.ParticipantsApi* | [**getParticipant**](docs/ParticipantsApi.md#getParticipant) | **GET** /accounts/{accountId}/participants/{participantId} | Get Participant
*NodeSdk.PhoneNumberLookupApi* | [**lookupRequest**](docs/PhoneNumberLookupApi.md#lookupRequest) | **POST** /accounts/{accountId}/tnlookup | Create Request
*NodeSdk.PhoneNumberLookupApi* | [**lookupRequestStatus**](docs/PhoneNumberLookupApi.md#lookupRequestStatus) | **GET** /accounts/{accountId}/tnlookup/{requestId} | Query Request Status
*NodeSdk.RecordingsApi* | [**deleteCallTranscription**](docs/RecordingsApi.md#deleteCallTranscription) | **DELETE** /api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription | Delete Transcription
*NodeSdk.RecordingsApi* | [**deleteRecording**](docs/RecordingsApi.md#deleteRecording) | **DELETE** /api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId} | Delete Recording
*NodeSdk.RecordingsApi* | [**deleteRecordingMedia**](docs/RecordingsApi.md#deleteRecordingMedia) | **DELETE** /api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media | Delete Recording Media
*NodeSdk.RecordingsApi* | [**downloadCallRecording**](docs/RecordingsApi.md#downloadCallRecording) | **GET** /api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media | Download Recording
*NodeSdk.RecordingsApi* | [**getCallRecording**](docs/RecordingsApi.md#getCallRecording) | **GET** /api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId} | Get Call Recording
*NodeSdk.RecordingsApi* | [**getCallRecordings**](docs/RecordingsApi.md#getCallRecordings) | **GET** /api/v2/accounts/{accountId}/calls/{callId}/recordings | Get Call Recordings
*NodeSdk.RecordingsApi* | [**getCallTranscription**](docs/RecordingsApi.md#getCallTranscription) | **GET** /api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription | Get Transcription
*NodeSdk.RecordingsApi* | [**modifyCallRecordingState**](docs/RecordingsApi.md#modifyCallRecordingState) | **PUT** /api/v2/accounts/{accountId}/calls/{callId}/recording | Update Recording
*NodeSdk.RecordingsApi* | [**queryCallRecordings**](docs/RecordingsApi.md#queryCallRecordings) | **GET** /api/v2/accounts/{accountId}/recordings | Get Call Recordings
*NodeSdk.RecordingsApi* | [**transcribeCallRecording**](docs/RecordingsApi.md#transcribeCallRecording) | **POST** /api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription | Create Transcription Request
*NodeSdk.SessionsApi* | [**addParticipantToSession**](docs/SessionsApi.md#addParticipantToSession) | **PUT** /accounts/{accountId}/sessions/{sessionId}/participants/{participantId} | Add Participant
*NodeSdk.SessionsApi* | [**createSession**](docs/SessionsApi.md#createSession) | **POST** /accounts/{accountId}/sessions | Create Session
*NodeSdk.SessionsApi* | [**deleteSession**](docs/SessionsApi.md#deleteSession) | **DELETE** /accounts/{accountId}/sessions/{sessionId} | Delete Session
*NodeSdk.SessionsApi* | [**getParticipantSubscriptions**](docs/SessionsApi.md#getParticipantSubscriptions) | **GET** /accounts/{accountId}/sessions/{sessionId}/participants/{participantId}/subscriptions | Get Participant Subscriptions
*NodeSdk.SessionsApi* | [**getSession**](docs/SessionsApi.md#getSession) | **GET** /accounts/{accountId}/sessions/{sessionId} | Get Session
*NodeSdk.SessionsApi* | [**listSessionParticipants**](docs/SessionsApi.md#listSessionParticipants) | **GET** /accounts/{accountId}/sessions/{sessionId}/participants | List Participants
*NodeSdk.SessionsApi* | [**removeParticipantFromSession**](docs/SessionsApi.md#removeParticipantFromSession) | **DELETE** /accounts/{accountId}/sessions/{sessionId}/participants/{participantId} | Remove Participant
*NodeSdk.SessionsApi* | [**updateParticipantSubscriptions**](docs/SessionsApi.md#updateParticipantSubscriptions) | **PUT** /accounts/{accountId}/sessions/{sessionId}/participants/{participantId}/subscriptions | Update Participant Subscriptions


## Documentation for Models

 - [NodeSdk.ApiError](docs/ApiError.md)
 - [NodeSdk.BandwidthCallbackMessage](docs/BandwidthCallbackMessage.md)
 - [NodeSdk.BandwidthMessage](docs/BandwidthMessage.md)
 - [NodeSdk.BandwidthMessageItem](docs/BandwidthMessageItem.md)
 - [NodeSdk.BandwidthMessagesList](docs/BandwidthMessagesList.md)
 - [NodeSdk.CallCallback](docs/CallCallback.md)
 - [NodeSdk.CallRecordingMetadata](docs/CallRecordingMetadata.md)
 - [NodeSdk.CallState](docs/CallState.md)
 - [NodeSdk.ConferenceCallback](docs/ConferenceCallback.md)
 - [NodeSdk.ConferenceMemberState](docs/ConferenceMemberState.md)
 - [NodeSdk.ConferenceRecordingMetadata](docs/ConferenceRecordingMetadata.md)
 - [NodeSdk.ConferenceState](docs/ConferenceState.md)
 - [NodeSdk.CreateCallRequest](docs/CreateCallRequest.md)
 - [NodeSdk.CreateCallResponse](docs/CreateCallResponse.md)
 - [NodeSdk.DeferredResult](docs/DeferredResult.md)
 - [NodeSdk.Diversion](docs/Diversion.md)
 - [NodeSdk.Error](docs/Error.md)
 - [NodeSdk.ErrorWithRequest](docs/ErrorWithRequest.md)
 - [NodeSdk.ForbiddenRequest](docs/ForbiddenRequest.md)
 - [NodeSdk.InlineResponse200](docs/InlineResponse200.md)
 - [NodeSdk.MachineDetectionConfiguration](docs/MachineDetectionConfiguration.md)
 - [NodeSdk.Media](docs/Media.md)
 - [NodeSdk.MessageRequest](docs/MessageRequest.md)
 - [NodeSdk.MessagingException](docs/MessagingException.md)
 - [NodeSdk.ModifyCallRecordingRequest](docs/ModifyCallRecordingRequest.md)
 - [NodeSdk.ModifyCallRequest](docs/ModifyCallRequest.md)
 - [NodeSdk.ModifyConferenceRequest](docs/ModifyConferenceRequest.md)
 - [NodeSdk.OrderRequest](docs/OrderRequest.md)
 - [NodeSdk.OrderResponse](docs/OrderResponse.md)
 - [NodeSdk.OrderStatus](docs/OrderStatus.md)
 - [NodeSdk.OrderStatusResult](docs/OrderStatusResult.md)
 - [NodeSdk.PageInfo](docs/PageInfo.md)
 - [NodeSdk.Participant](docs/Participant.md)
 - [NodeSdk.ParticipantSubscription](docs/ParticipantSubscription.md)
 - [NodeSdk.Session](docs/Session.md)
 - [NodeSdk.Subscriptions](docs/Subscriptions.md)
 - [NodeSdk.Tag](docs/Tag.md)
 - [NodeSdk.TranscribeRecordingRequest](docs/TranscribeRecordingRequest.md)
 - [NodeSdk.Transcript](docs/Transcript.md)
 - [NodeSdk.Transcription](docs/Transcription.md)
 - [NodeSdk.TranscriptionMetadata](docs/TranscriptionMetadata.md)
 - [NodeSdk.TranscriptionResponse](docs/TranscriptionResponse.md)
 - [NodeSdk.TwoFactorCodeRequestSchema](docs/TwoFactorCodeRequestSchema.md)
 - [NodeSdk.TwoFactorMessagingResponse](docs/TwoFactorMessagingResponse.md)
 - [NodeSdk.TwoFactorVerifyCodeResponse](docs/TwoFactorVerifyCodeResponse.md)
 - [NodeSdk.TwoFactorVerifyRequestSchema](docs/TwoFactorVerifyRequestSchema.md)
 - [NodeSdk.TwoFactorVoiceResponse](docs/TwoFactorVoiceResponse.md)
 - [NodeSdk.UnauthorizedRequest](docs/UnauthorizedRequest.md)


## Documentation for Authorization



### httpBasic

- **Type**: HTTP basic authentication

