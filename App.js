import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';


export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = { 
      remedio1: { nome: '', remedio: '', comprimidos: '', resultado: 0.0, info: '' },
      remedio2: { nome: '', remedio: '', comprimidos: '', resultado: 0.0, info: '' },
      remedio3: { nome: '', remedio: '', comprimidos: '', resultado: 0.0, info: '' },
      
    };
    this.calculaRemedio = this.calculaRemedio.bind(this)
  }

  calculaRemedio() {

    const remedio1PorDia = parseFloat(this.state.remedio1.remedio);
    const remedio1NaCaixa = parseFloat(this.state.remedio1.comprimidos);


    const remedio2PorDia = parseFloat(this.state.remedio2.remedio);
    const remedio2NaCaixa = parseFloat(this.state.remedio2.comprimidos);

    const remedio3PorDia = parseFloat(this.state.remedio3.remedio);
    const remedio3NaCaixa = parseFloat(this.state.remedio3.comprimidos);


    const remedio1DoseMensal = remedio1PorDia * 30;
    const remedio1Resultado = remedio1DoseMensal / remedio1NaCaixa;


    const remedio2DoseMensal = remedio2PorDia * 30;
    const remedio2Resultado = remedio2DoseMensal / remedio2NaCaixa;

    const remedio3DoseMensal = remedio3PorDia * 30;
    const remedio3Resultado = remedio3DoseMensal / remedio3NaCaixa;



  this.setState({
  remedio1: { ...this.state.remedio1, resultado: remedio1Resultado, info: '' },
  remedio2: { ...this.state.remedio2, resultado: remedio2Resultado, info: '' },
  remedio3: { ...this.state.remedio3, resultado: remedio3Resultado, info: '' },
  });
  }
  

  render() {
  return (
    <ScrollView>
  <View style={styles.viewContainer}>
  <View style={styles.remedioContainer}>
  <Text style={styles.text}>Remédio 1</Text>
  <TextInput
  style={styles.textInput}
  onChangeText={nome => this.setState({ remedio1: { ...this.state.remedio1, nome } })}
  value={this.state.remedio1.nome}
  placeholder='Insira o nome do remédio'
  keyboardType='default'
  />
  <TextInput
  style={styles.textInput}
  onChangeText={remedio => this.setState({ remedio1: { ...this.state.remedio1, remedio } })}
  value={this.state.remedio1.remedio}
  placeholder='Insira a quantidade de remédios por dia'
  keyboardType='decimal-pad'
  />
  <TextInput
  style={styles.textInput}
  onChangeText={comprimidos => this.setState({ remedio1: { ...this.state.remedio1, comprimidos } })}
  value={this.state.remedio1.comprimidos}
  placeholder='Insira a quantidade de comprimidos da caixa'
  keyboardType='decimal-pad'
  />
  <Text style={styles.input}>
  Resultado de caixas para 30 dias: {this.state.remedio1.nome} {this.state.remedio1.resultado} {this.state.remedio1.info}
  </Text>
  </View>


  <View style={styles.remedioContainer}>
  <Text style={styles.text}>Remédio 2</Text>
  <TextInput
  style={styles.textInput}
  onChangeText={nome => this.setState({ remedio2: { ...this.state.remedio2, nome } })}
  value={this.state.remedio2.nome}
  placeholder='Insira o nome do remédio'
  keyboardType='default'
  />
  <TextInput
  style={styles.textInput}
  onChangeText={remedio => this.setState({ remedio2: { ...this.state.remedio2, remedio } })}
  value={this.state.remedio2.remedio}
  placeholder='Insira a quantidade de remédio por dia'
  keyboardType='decimal-pad'
  />
  <TextInput
  style={styles.textInput}
  onChangeText={comprimidos => this.setState({ remedio2: { ...this.state.remedio2, comprimidos } })}
  value={this.state.remedio2.comprimidos}
  placeholder='Insira a quantidade de comprimidos da caixa'
  keyboardType='decimal-pad'
  />
  <Text style={styles.input}>
  Resultado de caixas para 30 dias: {this.state.remedio2.nome} {this.state.remedio2.resultado} {this.state.remedio2.info}
  </Text>
  </View>

 
  <View style={styles.remedioContainer}>
  <Text style={styles.text}>Remédio 3</Text>
  <TextInput
  style={styles.textInput}
  onChangeText={nome => this.setState({ remedio3: { ...this.state.remedio3, nome } })}
  value={this.state.remedio3.nome}
  placeholder='Insira o nome do remédio'
  keyboardType='default'
  />
  <TextInput
  style={styles.textInput}
  onChangeText={remedio => this.setState({ remedio3: { ...this.state.remedio3, remedio } })}
  value={this.state.remedio3.remedio}
  placeholder='Insira a quantidade de remédios por dia'
  keyboardType='decimal-pad'
  />
  <TextInput
  style={styles.textInput}
  onChangeText={comprimidos => this.setState({ remedio3: { ...this.state.remedio3, comprimidos } })}
  value={this.state.remedio3.comprimidos}
  placeholder='Insira a quantidade de comprimidos da caixa'
  keyboardType='decimal-pad'
  />
  <Text style={styles.input}>
  Resultado de caixas para 30 dias: {this.state.remedio3.nome} {this.state.remedio3.resultado} {this.state.remedio3.info}
  </Text>
  </View>


  <Button
         onPress={this.calculaRemedio}
         title='Calcular'
         color='green'
       />
  </View>
    </ScrollView>
  );
  }
  }
  

  const styles = StyleSheet.create({
  viewContainer: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  },
  remedioContainer: {
  alignItems: 'center',
  marginVertical: 10,
  },
  text: {
  fontSize: 16,
  fontWeight: 'bold',
  marginVertical: 10,
  },
  textInput: {
  height: 40,
  borderWidth: 1,
  borderColor: 'black',
  paddingLeft: 5,
  marginVertical: 10,
  },
  input: {
  marginVertical: 10,
  },
  });
