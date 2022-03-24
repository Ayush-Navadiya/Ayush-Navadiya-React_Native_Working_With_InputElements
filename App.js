import React from 'react';
import { StyleSheet, ImageBackground, View, ScrollView } from 'react-native';
import { Button, Divider, Input, Layout, Radio, Text, RadioGroup, ApplicationProvider } from '@ui-kitten/components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useValidation } from 'react-native-form-validator';
import * as eva from '@eva-design/eva';

export default function App() {

  const [fname, setfname] = React.useState('');
  const [lname, setlname] = React.useState('');
  const [phone_no, setphone_no] = React.useState('');
  const [email, setemail] = React.useState('');
  const [city, setcity] = React.useState('');
  const [address,setaddress] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [password, setpassowrd] = React.useState('');
  const [confirmpass, setconfirmpass] = React.useState('');
  var gender = '';

    // Validation
    const { validate, isFieldInError, getErrorsInField, getErrorMessages, isFormValid  } = useValidation({
        state: { fname, lname, phone_no, email, city, password, address, confirmpass },
    });

    if(selectedIndex == 0)
    {
        gender = 'm';
    } else if(selectedIndex == 1)
    {
        gender = 'f';
    }

    const userSignup = () => {
    // Validation Rules 
        validate({
            fname: {required: true},
            lname: {required: true},
            email: {email: true},
            city: {required: true},
            address: {required: true},
            phone_no: { required: true},
            password: { required: true},
            confirmpass: { required: true, equalPassword: password},
        });

        if(isFormValid()) {
          //Executed if form valid
            alert('Form Submitted');
        }
    };

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <ImageBackground source={require('./assets/authbg.png')} resizeMode="cover" style={styles.image}>
    <SafeAreaProvider>
        <ScrollView style={{height: '100%'}}>
          <Divider/>
          <Layout style={{ marginTop: 20, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'}}>
              <Layout style={[styles.container, {marginTop: 30}]} level='1'>
                  <Input
                      style={{flex: 1,marginRight: 2, backgroundColor: '#fff6',}}
                      value={fname}
                      placeholder='First name'
                      placeholderTextColor="#606060"
                      onChangeText={setfname}
                      caption={isFieldInError('fname') ? (
                          <View style={styles.captionContainer}>
                              <Text style={styles.captionText}>Invalid First Name</Text>
                          </View>
                          ) : ( <></> )
                        }
                  />
                  <Input
                      style={{flex: 1, marginLeft: 2, backgroundColor: '#fff6',}}
                      value={lname}
                      placeholder='Last Name'
                      placeholderTextColor="#606060"
                      onChangeText={setlname}
                      caption={ isFieldInError('lname') ? (
                          <View style={styles.captionContainer}>
                              <Text style={styles.captionText}>Invalid Last Name</Text>
                          </View> ) : ( <></> )
                        }
                  />
              </Layout>
              <Input
                  placeholder='Phone no'
                  value={phone_no}
                  onChangeText={setphone_no}
                  style={styles.input}
                  placeholderTextColor="#606060"
                  caption={isFieldInError('phone_no') ? (
                      <View style={styles.captionContainer}>
                          <Text style={styles.captionText}>Invalid Phone no</Text>
                      </View> ) : (<></>)
                    }
              />
              <Input
                  placeholder='Mail'
                  value={email}
                  onChangeText={setemail}
                  style={styles.input}
                  placeholderTextColor="#606060"
                  caption={isFieldInError('email') ? (
                      <View style={styles.captionContainer}>
                          <Text style={styles.captionText}>Invalid Email Id</Text>
                      </View> ): ( <></> )
                    }
              />
              <Input
                  placeholder='City'
                  value={city}
                  onChangeText={setcity}
                  style={styles.input}
                  placeholderTextColor="#606060"
                  caption={isFieldInError('city') ? (
                      <View style={styles.captionContainer}>
                          <Text style={styles.captionText}>Invalid City</Text>
                      </View> ) : ( <></> )
                    }
              />
              <Input
                  placeholder='Address'
                  value={address}
                  onChangeText={setaddress}
                  style={styles.input}
                  placeholderTextColor="#606060"
                  caption={isFieldInError('address') ? (
                      <View style={styles.captionContainer}>
                          <Text style={styles.captionText}>Invalid Address</Text>
                      </View> ) : ( <></> )
                    }
              />
              <RadioGroup
                  selectedIndex={selectedIndex}
                  onChange={index => setSelectedIndex(index)} style={styles.container}>
                  <Radio><Text style={styles.text}>Male</Text></Radio>
                  <Radio><Text style={styles.text}>Female</Text></Radio>
              </RadioGroup>
              <Input
                  placeholder='Password'
                  value={password}
                  onChangeText={setpassowrd}
                  style={styles.input}
                  placeholderTextColor="#606060"
                  caption={isFieldInError('password') ? (
                      <View style={styles.captionContainer}>
                          <Text style={styles.captionText}>Invalid Password</Text>
                      </View> ) : ( <></> )
                    }
              />
              <Input
                  placeholder='Confirm Password'
                  style={styles.input}
                  value={confirmpass}
                  onChangeText={setconfirmpass}
                  placeholderTextColor="#606060"
                  caption={isFieldInError('confirmpass') ? (
                      <View style={styles.captionContainer}>
                          <Text style={styles.captionText}>Invalid Confirm password</Text>
                      </View> ) : ( <></> )
                    }
              />
              <Button style={{marginTop: 25, paddingHorizontal: 30}} onPress={userSignup} size="large">Sign Up</Button>
          </Layout>
        </ScrollView>
    </SafeAreaProvider>
  </ImageBackground>
  </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
      margin: 1,
      color: '#fff'
  },
  input: {
      margin: 10,
      marginHorizontal: 30,
      backgroundColor: '#fff6',
      color: '#ffffff'
  },
  container: {
      flexDirection: 'row',
      marginHorizontal: 30,
      marginVertical: 10,
      justifyContent: 'space-between',
      backgroundColor: 'transparent'
  },
  image: {
      flex: 1,
      justifyContent: "center",
  },
  captionContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
  },
  captionText: {
      fontSize: 12,
      fontWeight: "400",
      color: "#ff3333",
  },
});
