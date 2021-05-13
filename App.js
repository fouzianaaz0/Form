import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ContactDetail from './src/Components/ContactDetail';
import ShippingAddress from './src/Components/ShippingAddress';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      country: '',
      state: '',
      zip: '',
      billingAdd: '',
      billingCity: '',
      billingCountry: '',
      billingState: '',
      billingZip: '',
    };
  }

  setAdd = () => {
    this.setState({checked: !this.state.checked});
    if (this.state.checked == false) {
      console.log(this.state, 'Here');
      this.setState({
        billingAdd: this.state.address,
        billingCity: this.state.city,
        billingCountry: this.state.country,
        billingState: this.state.state,
        billingZip: this.state.zip,
      });
    } else {
      console.log(this.state, 'There');
      this.setState({
        billingAdd: '',
        billingCity: '',
        billingCountry: '',
        billingState: '',
        billingZip: '',
      });
    }
  };

  validateFirstName = () => {
    if (this.state.firstName.length < 1) {
      alert('Minimum 1 Character required');
    } else if (this.state.firstName.length > 15) {
      alert('Maximum characters exceeded');
    } else {
      this.lastname.focus();
    }
  };
  validateLastName = () => {
    if (this.state.lastName.length < 1) {
      alert('Minimum 1 Character required');
    } else if (this.state.lastName.length > 15) {
      alert('Maximum characters exceeded');
    } else {
      this.emailref.focus();
    }
  };
  validateEmail = () => {
    if (this.state.email.length < 1) {
      alert('Required');
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)
    ) {
      alert('Invalid email address');
    } else {
      this.phonenumber.focus();
    }
  };
  validateNumber = () => {
    console.log(this.state.firstName, 'Here');
    if (this.state.phone.length < 10) {
      alert('Invalid Phone Number');
    } else {
      this.address.focus();
    }
  };

  render() {
    const {checked} = this.state;
    return (
      <View style={{flex: 1}}>
        <View style={styles.Header}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 65,
              justifyContent: 'space-between',
            }}>
            <Text style={styles.HeaderText}>Checkout</Text>
            <View style={{marginRight: 20, flexDirection: 'row'}}>
              <Image
                style={{marginRight: 25, height: 25, width: 25}}
                source={require('./src/shopping-cart.png')}
              />
              <Image
                style={{height: 18, width: 18}}
                source={require('./src/close.png')}
              />
            </View>
          </View>
        </View>
        <View style={styles.DetailBox}>
          <View style={styles.Layout1}>
            <Image
              style={styles.Icon1}
              source={require('./src/image/check.png')}
            />
          </View>
          <Image
            style={styles.rightArrow}
            source={require('./src/image/right.png')}
          />
          <View style={styles.Layout2}>
            <Image
              style={styles.Icon1}
              source={require('./src/image/two.png')}
            />
            <Text style={styles.DeliveryText}>Delivery Details</Text>
          </View>
          <Image
            style={styles.rightArrow}
            source={require('./src/image/right.png')}
          />
          <View style={styles.layout3}>
            <Image
              style={styles.Icon1}
              source={require('./src/image/three.png')}
            />
          </View>
          <Image
            style={styles.rightArrow}
            source={require('./src/image/right.png')}
          />
          <View style={styles.layout3}>
            <Image
              style={styles.icon2}
              source={require('./src/image/Four.png')}
            />
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.MainLayout}>
            <Text style={styles.Text}>CONTACT DETAILS</Text>
            <View>
              <Text style={styles.TextHead}>First Name</Text>
              <TextInput
                ref={r => (this.firstName = r)}
                style={styles.TextInput}
                placeholder="First Name"
                onChangeText={text => this.setState({firstName: text})}
                value={this.state.firstName}
                onSubmitEditing={this.validateFirstName}
              />
              <Text style={styles.TextHead}>Last Name</Text>
              <TextInput
                ref={r => (this.lastname = r)}
                style={styles.TextInput}
                placeholder="Last Name"
                onChangeText={text => this.setState({lastName: text})}
                value={this.state.lastName}
                onSubmitEditing={this.validateLastName}
              />
              <Text style={styles.TextHead}>Email</Text>
              <TextInput
                ref={r => (this.emailref = r)}
                style={styles.TextInput}
                placeholder="Enter Email"
                onChangeText={text => this.setState({email: text})}
                value={this.state.email}
                onSubmitEditing={this.validateEmail}
              />
              <Text style={styles.TextHead}>Phone Number *</Text>
              <View style={styles.phoneTextInput}>
                <Image
                  style={styles.downArrow}
                  source={require('./src/image/down.png')}
                />
                <Text style={styles.phoneText}>+91</Text>
                <View style={styles.verticleLine} />
                <TextInput
                  ref={r => (this.phonenumber = r)}
                  style={{marginLeft: 20}}
                  placeholder="Enter Phone Number"
                  onChangeText={text => this.setState({phone: text})}
                  value={this.state.phonenumber}
                  onSubmitEditing={this.validateNumber}
                />
              </View>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.MainLayout}>
            <Text style={styles.Text}>SHIPPING ADDRESS</Text>
            <View>
              <Text style={styles.Text}>Address *</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Address"
                value={this.state.address}
                onChangeText={text => {
                  this.setState({address: text});
                }}
              />
              <Text style={styles.TextHead}>City *</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter City"
                value={this.state.city}
                onChangeText={text => {
                  this.setState({city: text});
                }}
              />
              <Text style={styles.TextHead}>Country *</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Country"
                value={this.state.country}
                onChangeText={text => {
                  this.setState({country: text});
                }}
              />
              <Text style={styles.TextHead}>State / Province *</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter State / Province"
                value={this.state.state}
                onChangeText={text => {
                  this.setState({state: text});
                }}
              />
              <Text style={styles.TextHead}>Zip / Postal Code *</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Zip / Postal Code"
                value={this.state.zip}
                onChangeText={text => {
                  this.setState({zip: text});
                }}
              />
            </View>
          </View>
          <View style={styles.GrayArea}>
            <TouchableOpacity
              style={{
                ...styles.CheckBox,
                backgroundColor: this.state.checked ? '#3792cb' : '#ececec',
              }}
              onPress={() => this.setAdd()}></TouchableOpacity>
            <Text style={styles.ShippingText}>
              Shipping and Billing Address are same
            </Text>
          </View>
          <View style={styles.MainLayout}>
            <Text style={styles.Text}>BILLING ADDRESS</Text>
            <View>
              <Text style={styles.Text}>Address *</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Address"
                value={this.state.billingAdd}
                onChangeText={text => {
                  this.setState({billingAdd: text});
                }}
              />
              <Text style={styles.TextHead}>City *</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter City"
                value={this.state.billingCity}
                onChangeText={text => {
                  this.setState({billingCity: text});
                }}
              />
              <Text style={styles.TextHead}>Country *</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Country"
                value={this.state.billingCountry}
                onChangeText={text => {
                  this.setState({billingCountry: text});
                }}
              />
              <Text style={styles.TextHead}>State / Province *</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter State / Province"
                value={this.state.billingState}
                onChangeText={text => {
                  this.setState({billingState: text});
                }}
              />
              <Text style={styles.TextHead}>Zip / Postal Code *</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Zip / Postal Code"
                value={this.state.billingZip}
                onChangeText={text => {
                  this.setState({billingZip: text});
                }}
              />
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.MainLayout}>
            <View style={styles.BottomView}>
              <View>
                <Text style={styles.AmountText}>Total Amount</Text>
                <Text style={styles.Amount}>$20.0</Text>
              </View>
              <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#3792cb',
    height: 100,
  },
  HeaderText: {
    marginLeft: 10,
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
  },
  Text: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
  },
  Button: {
    backgroundColor: '#3792cb',
    height: 45,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  ButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  AmountText: {
    fontSize: 16,
    color: '#f9b100',
    fontWeight: '600',
  },
  Amount: {
    fontWeight: '700',
    fontSize: 20,
    marginTop: 5,
  },
  DetailBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 5,
    borderTopWidth: 5,
    borderColor: '#ececec',
    height: 60,
  },
  Layout1: {
    flex: 0.1,
    marginLeft: 30,
  },
  Icon1: {
    height: 22,
    width: 22,
  },
  Layout2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
    marginLeft: 20,
  },
  icon2: {
    alignItems: 'center',
    height: 25,
    width: 25,
  },
  DeliveryText: {
    marginLeft: 10,
    color: '#3792cb',
    fontWeight: '500',
    fontSize: 15,
  },
  layout3: {
    flex: 0.2,
    alignItems: 'center',
  },
  MainLayout: {
    margin: 20,
  },
  line: {
    borderBottomColor: '#ececec',
    borderBottomWidth: 4,
  },
  CheckBox: {
    height: 25,
    width: 25,
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 5,
    marginLeft: 20,
  },
  GrayArea: {
    height: 70,
    backgroundColor: '#ececec',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ShippingText: {
    marginLeft: 10,
    color: 'gray',
    fontSize: 16,
  },
  rightArrow: {
    height: 50,
    height: 50,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 45,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 1,
  },
  TextHead: {
    marginTop: 20,
    fontSize: 14,
    color: 'gray',
  },
  NumText: {
    fontWeight: '700',
    color: '#3792cb',
  },
  verticleLine: {
    height: 30,
    width: 1,
    backgroundColor: 'gray',
    marginLeft: 10,
  },
  phoneTextInput: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 45,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  downArrow: {
    height: 13,
    width: 13,
    marginLeft: 10,
  },
  phoneText: {
    fontSize: 14,
    marginLeft: 10,
    color: '#3792cb',
    fontWeight: '600',
  },
});

export default App;
