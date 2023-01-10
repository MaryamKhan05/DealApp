import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        data.map((item) => (
          <Text key={item.id}>{item.title}</Text>
        ))
      )}
    </View>
  );
};

export default App;