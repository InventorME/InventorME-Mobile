import React, { Component } from "react";
import { render } from "react-dom";
import { View, Text, FlatList } from "react-native";
import ProgCircle from '../../Components/ProgCircle';
import styles from "../../screens/CollectionsScreen/collections.style";
import BoxFolderComponent from "../../Components/BoxFolderComponent";
import { Database } from '../../util/Database';
import { colors } from '../../util/colors';


class StatsScreen extends Component {
  // const [name, setName] = useState('');
  // const [category, setCategory] = useState('');
  // const [location, setLocation] = useState('');
  // const [notes, setNotes] = useState('');
  // const [tags, setTags] = useState('');




  constructor(props) {
    super(props)
    this.state = {
      Archived_Items: [], loading: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.getItems();
  }

  getItems = async () => {
    const db = new Database();
    try {
      const body = await db.get();
      let archivedItems = [];
      if (body.items.length > 0)
        if (body.items.filter(item => item.itemArchived === 1)) {
          let archivedItems = [];
          archivedItems = body.items.filter(item => item.itemArchived === 1)
          this.setState({ archiveLength: archivedItems.length })
          this.setState({ allLength: body.items.length })
        }

      if (body.items.filter(item => item.itemArchived === 0)) {
        for (var i = 0; i < body.items.length; i++) {
          var obj = body.items[i];
          for (var prop in obj) {
            if (obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])) {
              obj[prop] = +obj[prop];
              var output = body.items.reduce((arr, d, x) => {
                var keys = Object.keys(d);
                keys.forEach((k) => {
                  if (!arr[k]) arr[k] = 0;
                  arr[k] = arr[k] + d[k];
                })
                return arr;
              }, {});
            }
          }
          this.setState({ Lost: ((output.itemPurchaseAmount - output.itemWorth) / (output.itemPurchaseAmount)).toFixed(2) })
          this.setState({ depreciation: Math.round(output.itemPurchaseAmount) })
          this.setState({ currentWorth: Math.round(output.itemWorth) })
          this.setState({ allLength: body.items.length })
        }
        if (body.items.filter(item => item.itemSellAmount !== null)) {
          let soldItems = [];
          soldItems = body.items.filter(item => item.itemSellAmount !== null)
          this.setState({ soldLength: soldItems.length })

        }

        if (body.items.filter(item => item.itemRecurringPaymentAmount !== null)) {
          this.setState({ Costper: output.itemRecurringPaymentAmount.toFixed(2) })

        }
      }
      this.setState({ Archived_Items: archivedItems });
      this.render();
      this.setState({ loading: false });
    }
    catch (error) {
      console.log('Error pulling data', error);
    }

  }

  renderTableHeader() {
    console.log(this.state);
    return this.state.Headers.map((key, index) => {
      return <View key={index}>{key.toUpperCase()}</View>
    })
  }
  
  render() {
    
    const percentage = 100;
    if(!this.state.loading){
    return (
      //{this.state.loading ?
      <View>
        
          
        <View >
          <ProgCircle
            percent={percentage}
            text={`$${Math.round(this.state.currentWorth / this.state.allLength) * 100}`}

          />
          <Text > {'Net Worth '}</Text>
        </View>
        <View >
          <ProgCircle
            percent={(this.state.depreciation - this.state.currentWorth) / 100}
            text={`$${(this.state.depreciation - this.state.currentWorth)}`}

          />
          <Text > {'Depreciation'} </Text>
        </View>
            


        <View >
          <ProgCircle
           percent={(this.state.archiveLength / this.state.allLength) * 100}
           text={`${this.state.archiveLength}`}

          />
          <Text>{'Archived Items'} </Text>
        </View>

        <View >
          <ProgCircle
              percent={100}
              text={`${this.state.allLength}`}
          />
          <Text > {'# All Items'} </Text>
        </View>
        <View>
          <ProgCircle
            percent={percentage}
            text={`$${this.state.depreciation}`}

          />
          <Text > {'Money Invested'} </Text>
        </View>

        <View >
          <ProgCircle
            percent={this.state.soldLength}
            text={`${this.state.Lost * 100}%`}
          />
          <Text> {'% Money Lost'} </Text>
        </View>

        <View>
          <ProgCircle
            percent={this.state.Lost * 100}
            text={`$${this.state.Costper}/Mo`}

          />
          <Text> {'Monthly Recurring Cost'} </Text>
        </View>
      </View> 
    )}else{
      return(
        <Text>Loading...</Text>
      )
    }
  }

}
export default StatsScreen;