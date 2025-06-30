# Configuration du formulaire de contact

## Étapes pour configurer l'envoi d'emails

1. **Créer un compte EmailJS**
   - Allez sur https://www.emailjs.com/
   - Créez un compte gratuit

2. **Configurer un service email**
   - Dans votre tableau de bord EmailJS, allez dans "Email Services"
   - Ajoutez un nouveau service (Gmail, Outlook, etc.)
   - Suivez les instructions pour connecter votre email

3. **Créer un template d'email**
   - Allez dans "Email Templates"
   - Créez un nouveau template
   - Utilisez ces variables dans votre template :
     - `{{user_name}}` - Nom de l'expéditeur
     - `{{user_email}}` - Email de l'expéditeur
     - `{{message}}` - Message de l'expéditeur

4. **Obtenir vos clés**
   - Service ID : Trouvé dans la section "Email Services"
   - Template ID : Trouvé dans la section "Email Templates"
   - Public Key : Trouvé dans "Account" > "General"

5. **Configurer votre application**
   - Ouvrez le fichier `src/config/emailjs.js`
   - Remplacez les valeurs par vos vraies clés EmailJS

## Exemple de template EmailJS

```
Sujet: Nouveau message de {{user_name}}

Vous avez reçu un nouveau message depuis votre portfolio :

Nom: {{user_name}}
Email: {{user_email}}
Message: {{message}}
```

## Test

Après configuration, votre formulaire de contact enverra automatiquement des emails à l'adresse configurée dans EmailJS.
