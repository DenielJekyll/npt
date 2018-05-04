#include <iostream>
#include "test.cpp"
#include <fstream>

using namespace std;

int main ()
{
    char buff[50]; 
    int a, b;
    a = b = 0;
    cout << "Hello world, this is a test a+b!\n";
    cout << "Scan: ";
    ifstream f("input.txt");
    if (!f.is_open()) // если файл не открыт
        cout << "Файл не может быть открыт!\n"; // сообщить об этом
    f >> a >> b;
    f.close();
    cout << "a = " << a << "b = " << b;
    int c = sub(a, b);
    cout << "\nRes:" << c;
    cin >> c;
    return 0;
}