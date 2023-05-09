import random
import sys
from faker import Faker
import json

def create_fake_users(n):
    """Generate fake users."""
    faker = Faker()
    users = []
    for _ in range(n):
        name = faker.name()
        age = random.randint(20, 80)
        address = faker.address().replace('\n', ', ')
        phone = faker.phone_number()
        email = faker.email()
        
        users.append(dict(name=name, age=age, address=address, phone=phone, email=email))
        
    with open('data.json', 'w') as outfile:
        json.dump(users, outfile, indent=4)
    print(f'Added {n} fake users to the database.')


if __name__ == '__main__':
    if len(sys.argv) <= 1:
        print('Pass the number of users you want to create as an argument.')
        sys.exit(1)
    create_fake_users(int(sys.argv[1]))