import lorem
import yaml

def generate_fields():
    names_to_vals = {}
    length = 40
    for i in range(1, length):
        names_to_vals[' '.join(lorem.sentence().split()[0:5])] = lorem.sentence()
    return names_to_vals


result = generate_fields()
print(yaml.dump(result))
