/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import react, { useEffect } from 'react';
import { View, Button } from 'react-native';
import analytics from '@react-native-firebase/analytics'; 

function App() {
  return (
    <View style={{flex: 1, justifyContent: 'center' , alignItems: 'center'}}>
      <Button
        title="Press me"
        onPress={async () =>
          await analytics().logSelectContent({
            content_type: 'clothing',
            item_id: 'abcd',
          })
        }
      />
    </View>
  );
}

export default App;
