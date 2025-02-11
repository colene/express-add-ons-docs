# AddOnSdk.app.devFlags
Represents flags which can be used to simulate certain behavior during development.  

<InlineAlert slots="text" variant="warning"/>

This API can only be used during development.


## Methods

### simulateFreeUser
Simulate APIs as a free user.

#### Signature
`simulateFreeUser: boolean`

#### Return Value
`boolean` representing the current value of the flag.

## Example
```js
import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";
 
AddOnSdk.ready.then(async () => {
  AddOnSdk.app.devFlags.simulateFreeUser = true;
});
```
