const questions = [
  {
    question: "¿Qué servicio en Linux se utiliza principalmente para compartir carpetas y archivos entre sistemas Linux y Windows?",
    answers: ["NFS", "SSH", "Samba", "Apache"],
    correct: [2]
  },
  {
    question: "Para compartir carpetas exclusivamente entre sistemas Linux, ¿qué servicio se recomienda por ser más rápido y nativo?",
    answers: ["Samba", "NFS", "FTP", "SSH"],
    correct: [1]
  },
  {
    question: "¿Qué comando se utiliza en Linux para ver las interfaces de red y sus configuraciones IP (equivalente a ipconfig en Windows)?",
    answers: ["ping", "traceroute", "ifconfig", "netstat"],
    correct: [2]
  },
  {
    question: "Si necesitas configurar una dirección IP fija (estática) en una máquina Linux, ¿qué archivo de configuración es el principal que debes modificar?",
    answers: ["/etc/hosts", "/etc/resolv.conf", "/etc/network/interfaces", "/etc/sysconfig/network-scripts/ifcfg-eth0"],
    correct: [2]
  },
  {
    question: "En la configuración de red estática en Linux, ¿qué parámetros esenciales se deben especificar en el archivo /etc/network/interfaces?",
    answers: ["IP (address)", "Máscara de red (netmask)", "Puerta de enlace (gateway)", "Todas las anteriores"],
    correct: [3]
  },
  {
    question: "Después de modificar el archivo /etc/network/interfaces en Linux, ¿qué comando se utiliza generalmente para aplicar los cambios en la configuración de red?",
    answers: ["systemctl restart network", "service network restart", "ifconfig restart", "netplan apply"],
    correct: [1]
  },
  {
    question: "Cuando configuras una máquina Linux como router para que otras máquinas de la red interna salgan a Internet, ¿qué acción esencial debes habilitar?",
    answers: ["Desactivar el firewall", "Activar el reenvío de paquetes (ip_forward)", "Configurar DHCP Server", "Instalar un servidor proxy"],
    correct: [1]
  },
  {
    question: "¿Qué comando se utiliza en Linux para activar el reenvío de paquetes (ip_forward)?",
    answers: [
      "sysctl net.ipv4.ip_forward=1",
      "echo 1 > /proc/sys/net/ipv4/ip_forward",
      "iptables -A FORWARD -j ACCEPT",
      "route add -net 0.0.0.0 gateway <gateway_ip>"
    ],
    correct: [1]
  },
  {
    question: "Para ocultar las IP privadas de una red interna cuando las máquinas salen a Internet a través de un router Linux, ¿qué tipo de regla de iptables se debe crear?",
    answers: ["Regla FILTER", "Regla MANGLE", "Regla NAT (MASQUERADE)", "Regla RAW"],
    correct: [2]
  },
  {
    question: "¿En qué archivo script puedes incluir los comandos de ip_forward para que se ejecuten automáticamente al arrancar el servidor?",
    answers: ["/etc/profile", "/etc/init.d/networking", "/etc/rc.local", "~/.bashrc"],
    correct: [2]
  },
   {
    question: "¿Qué comando se utiliza en Linux para hacer que un archivo script (como /etc/rc.local) sea ejecutable?",
    answers: ["make +x <nombre_archivo>", "execute <nombre_archivo>", "chmod +x <nombre_archivo>", "run <nombre_archivo>"],
    correct: [2]
  },
  {
    question: "¿Por qué los comandos de red son muy parecidos en Windows y Linux?",
    answers: [
      "Porque ambos sistemas operativos fueron desarrollados por la misma empresa.",
      "Porque trabajan con los mismos protocolos de red (TCP/IP, etc.).",
      "Porque Linux imita a Windows en sus comandos de red.",
      "Es una coincidencia."
    ],
    correct: [1]
  },
  {
    question: "¿Qué comando de red se utiliza para comprobar la conectividad con otro equipo enviando paquetes y midiendo el tiempo de respuesta?",
    answers: ["traceroute", "netstat", "ping", "nslookup"],
    correct: [2]
  },
  {
    question: "Si quieres ver la ruta que siguen los paquetes desde tu máquina Linux hasta un destino, ¿qué comando utilizarías?",
    answers: ["ping", "netstat", "traceroute", "arp"],
    correct: [2]
  },
  {
    question: "¿Qué comando de red en Linux te permite ver las conexiones de red activas y los puertos que están 'escuchando'?",
    answers: ["ifconfig", "netstat", "hostname", "nslookup"],
    correct: [1]
  },
  {
    question: "¿Qué comando en Linux te muestra la tabla de correspondencia entre direcciones IP y direcciones MAC?",
    answers: ["netstat", "arp", "ifconfig", "ping"],
    correct: [1]
  },
  {
    question: "¿Qué servicio en Linux permite el acceso remoto seguro a servidores y la transferencia de archivos de forma cifrada?",
    answers: ["Telnet", "FTP", "SSH", "VNC"],
    correct: [2]
  },
  {
    question: "¿Qué software de servidor web se menciona como uno de los más usados y fácil de instalar en Linux?",
    answers: ["Nginx", "IIS", "Apache", "Tomcat"],
    correct: [2]
  },
  {
    question: "¿En qué directorio se alojan por defecto las páginas web que sirve Apache en Linux?",
    answers: ["/var/www/html", "/home/user/public_html", "/etc/apache2", "/opt/webserver"],
    correct: [0]
  },
  {
    question: "¿Qué servicio en Linux se utiliza específicamente para realizar transferencias de archivos a través de la red?",
    answers: ["SSH", "Samba", "NFS", "FTP"],
    correct: [3]
  },
  {
    question: "En el contexto de la administración de redes Windows, ¿cuál es la principal diferencia entre un Grupo de trabajo y un Dominio?",
    answers: [
      "Un grupo de trabajo es para redes grandes, un dominio para redes pequeñas.",
      "Un grupo de trabajo tiene administración centralizada, un dominio no.",
      "Un grupo de trabajo es descentralizado sin servidor central, un dominio tiene un servidor central (Active Directory).",
      "Windows Home puede unirse a un dominio, pero no a un grupo de trabajo."
    ],
    correct: [2]
  },
  {
    question: "¿Qué opción de red es adecuada en Windows para una red profesional con gestión centralizada de usuarios, permisos y equipos?",
    answers: ["Grupo de trabajo", "Dominio", "Red doméstica", "Workgroup"],
    correct: [1]
  },
  {
    question: "¿Qué comando puedes ejecutar en 'Ejecutar' (Windows + R) para abrir propiedades del sistema y cambiar nombre o grupo de trabajo/dominio?",
    answers: ["msconfig", "control panel", "ncpa.cpl", "sysdm.cpl"],
    correct: [3]
  },
  {
    question: "¿Qué comando en cmd permite verificar el nombre del equipo en la red local en Windows?",
    answers: ["ipconfig", "ping", "hostname", "tracert"],
    correct: [2]
  },
  {
    question: "¿Qué comprueba la acción de ejecutar ping 127.0.0.1 en Windows?",
    answers: [
      "Conectividad con Internet.",
      "Funcionamiento de la red interna del equipo (localhost).",
      "Conectividad con el router.",
      "Que la tarjeta de red esté conectada físicamente."
    ],
    correct: [1]
  },
  {
    question: "¿Cómo se llama la ruta estandarizada para indicar recursos en red como \\\\EQUIPO1\\Documentos en Windows?",
    answers: ["RDP Path", "UNC Path (Universal Naming Convention)", "SMB Path", "FTP Path"],
    correct: [1]
  },
  {
    question: "¿Cuál de las siguientes afirmaciones es correcta sobre Ping en redes?",
    answers: [
      "Ping es un servicio que usa el puerto 80.",
      "Ping es una herramienta que usa el protocolo ICMP.",
      "Ping es un protocolo que usa el puerto 21.",
      "Ping es un servicio que usa el protocolo TCP."
    ],
    correct: [1]
  },
  {
    question: "¿Qué es un Protocolo en el contexto de redes?",
    answers: [
      "Una función activa que un equipo presta a otros.",
      "Una puerta lógica de entrada y salida en el sistema operativo.",
      "El lenguaje o conjunto de reglas para la comunicación.",
      "Un programa que se ejecuta en segundo plano."
    ],
    correct: [2]
  },
  {
    question: "¿Qué es un Servicio de red?",
    answers: [
      "El lenguaje o conjunto de reglas para la comunicación.",
      "Una función que un equipo ofrece a otros dentro de una red.",
      "Una puerta lógica para distinguir entre aplicaciones.",
      "El equipo que accede a un recurso."
    ],
    correct: [1]
  },
  {
    question: "¿Cómo se llama la arquitectura donde un equipo ofrece funciones (Servidor) y otro accede desde la red (Cliente)?",
    answers: ["Peer-to-Peer", "Broadcast", "Cliente-Servidor", "Mesh"],
    correct: [2]
  },
  {
    question: "¿Qué protocolo utiliza el servicio más básico para compartir carpetas e impresoras en redes locales en Windows?",
    answers: ["HTTP", "FTP", "SMB (Server Message Block)", "RDP"],
    correct: [2]
  },
  {
    question: "¿Qué afirmación es correcta respecto a FTP (File Transfer Protocol)?",
    answers: [
      "FTP es únicamente un servicio.",
      "FTP es únicamente un protocolo.",
      "FTP es tanto un protocolo como un servicio.",
      "FTP se utiliza solo para enviar correos electrónicos."
    ],
    correct: [2]
  },
  {
    question: "¿Qué puertos utiliza el servicio FTP?",
    answers: [
      "80 y 443",
      "25, 110 y 143",
      "21 (control) y a veces 20 (datos)",
      "3389"
    ],
    correct: [2]
  },
  {
    question: "¿Qué puertos usan HTTP y HTTPS respectivamente?",
    answers: ["21 y 20", "80 y 443", "25 y 110", "3389 y 143"],
    correct: [1]
  },
  {
    question: "¿Qué protocolo permite descargar mensajes almacenados en el servidor al equipo del usuario?",
    answers: ["SMTP", "IMAP", "POP3", "HTTP"],
    correct: [2]
  },
  {
    question: "¿Qué protocolo permite consultar correos sin necesidad de descargarlos al equipo?",
    answers: ["SMTP", "IMAP", "POP3", "FTP"],
    correct: [1]
  },
  {
    question: "¿Qué protocolo se usa para enviar correos desde el cliente al servidor?",
    answers: ["SMTP", "IMAP", "POP3", "RDP"],
    correct: [0]
  },
  {
    question: "¿Cuál es el puerto por defecto para el servicio de Escritorio Remoto (RDP) en Windows?",
    answers: ["21", "80", "3389", "443"],
    correct: [2]
  },
  {
    question: "¿Qué muestra el comando ipconfig en Windows?",
    answers: [
      "La ruta que siguen los paquetes a un destino.",
      "La tabla ARP (IP-MAC).",
      "La configuración de red del adaptador (IP, máscara, puerta de enlace).",
      "Las conexiones de red activas."
    ],
    correct: [2]
  },
  {
    question: "¿Qué comando en Windows permite comprobar si un destino responde (IP o dominio)?",
    answers: ["tracert", "netstat", "ping", "nslookup"],
    correct: [2]
  },
  {
    question: "¿Qué comando en Windows te permite ver la tabla ARP, que relaciona direcciones IP con direcciones MAC?",
    answers: ["ipconfig /all", "netstat -a", "arp -a", "tracert"],
    correct: [2]
  },
  {
    question: "¿Qué comando de red en Windows muestra la ruta que siguen los paquetes hasta llegar a un destino?",
    answers: ["ping", "tracert", "netstat", "arp"],
    correct: [1]
  },
  {
    question: "¿Qué muestra el comando netstat -a en Windows?",
    answers: [
      "La configuración IP de la máquina.",
      "La tabla de enrutamiento.",
      "Las conexiones activas y puertos que están escuchando.",
      "La lista de servicios de red instalados."
    ],
    correct: [2]
  },
  {
    question: "¿Qué comando se utiliza en Windows para traducir un dominio (como www.google.com) a IP?",
    answers: ["ping", "tracert", "ipconfig /all", "nslookup"],
    correct: [3]
  },
  {
    question: "¿Qué comando en Linux se utiliza para crear un nuevo grupo (con permisos de superusuario)?",
    answers: ["addgroup", "groupadd", "mkgroup", "newgroup"],
    correct: [1]
  },
  {
    question: "¿Cómo puedes ver todos los grupos existentes en un sistema Linux?",
    answers: [
      "ls /etc/groups",
      "cat /etc/group",
      "less /var/log/groups.log",
      "grep '*' /etc/passwd"
    ],
    correct: [1]
  },
  {
    question: "¿Qué número identifica a un grupo en Linux en /etc/group?",
    answers: ["UID", "PID", "GID", "SID"],
    correct: [2]
  },
  {
    question: "¿Cuál es la ruta por defecto del directorio HOME al crear un usuario en Linux?",
    answers: [
      "/home/nombre_usuario",
      "/usr/home/nombre_usuario",
      "/var/home/nombre_usuario",
      "/root/nombre_usuario"
    ],
    correct: [0]
  },
  {
    question: "¿Qué parámetro se usa con useradd para crear el directorio HOME si no existe?",
    answers: ["-h", "-c", "-m", "-d"],
    correct: [2]
  },
  {
    question: "¿Qué parámetro se usa con useradd para asignar un grupo principal al usuario?",
    answers: ["-u", "-g", "-G", "-s"],
    correct: [1]
  },
  {
    question: "¿Qué hace el comando adduser nombre_usuario en Linux?",
    answers: [
      "Solo crea el usuario.",
      "Solo crea el grupo principal.",
      "Solo solicita la contraseña.",
      "Crea el usuario, su grupo principal y solicita información."
    ],
    correct: [3]
  },
  {
    question: "¿Qué comando asigna una contraseña a un usuario creado con useradd?",
    answers: [
      "passwd nombre_usuario",
      "chpasswd nombre_usuario",
      "setpassword nombre_usuario",
      "usermod -p <contraseña> nombre_usuario"
    ],
    correct: [0]
  },
  {
    question: "¿Qué comando permite modificar un usuario existente en Linux?",
    answers: [
      "useradd",
      "deluser",
      "usermod",
      "groupmod"
    ],
    correct: [2]
  },
  {
    question: "¿Qué opción se usa con usermod para añadir un usuario a grupos secundarios manteniendo el grupo principal?",
    answers: [
      "-g",
      "-G",
      "-aG",
      "-d"
    ],
    correct: [2]
  },
  {
    question: "¿Qué comando muestra los grupos a los que pertenece un usuario en Linux?",
    answers: [
      "id nombre_usuario",
      "groups nombre_usuario",
      "cat /etc/group | grep nombre_usuario",
      "getent group nombre_usuario"
    ],
    correct: [1]
  },
  {
    question: "¿Qué comando cambia el directorio HOME de un usuario existente?",
    answers: [
      "useradd -d",
      "usermod -d",
      "chown -R nombre_usuario:nombre_usuario /nueva/home",
      "mv /home/old_home /nueva/home"
    ],
    correct: [1]
  },
  {
    question: "¿Qué comando elimina un usuario en Linux pero no su directorio HOME?",
    answers: [
      "deluser nombre_usuario",
      "userdel nombre_usuario",
      "rmuser nombre_usuario",
      "userdel -r nombre_usuario"
    ],
    correct: [1]
  },
  {
    question: "¿Qué opción con userdel elimina al usuario y su directorio personal?",
    answers: [
      "-f",
      "-a",
      "-r",
      "-h"
    ],
    correct: [2]
  },
  {
    question: "¿Qué comando elimina a un usuario de un grupo secundario específico?",
    answers: [
      "usermod -R grupo_secundario usuario",
      "groupdel -u usuario grupo_secundario",
      "gpasswd -d usuario grupo_secundario",
      "userdel -g grupo_secundario usuario"
    ],
    correct: [2]
  },
  {
    question: "¿Cómo puedes comprobar si un usuario ha sido eliminado correctamente?",
    answers: [
      "groups nombre_usuario y verificar si da error.",
      "Buscar en /etc/passwd con grep.",
      "Intentar iniciar sesión con ese usuario.",
      "Buscar el HOME del usuario en /home."
    ],
    correct: [1]
  },
  {
    question: "¿Cuál es el comando para eliminar un grupo en Linux?",
    answers: [
      "groupadd -d nombre_grupo",
      "delgroup nombre_grupo",
      "groupdel nombre_grupo",
      "rmgroup nombre_grupo"
    ],
    correct: [2]
  },
  {
    question: "¿Qué condiciones deben cumplirse para eliminar un grupo en Linux con groupdel?",
    answers: [
      "El grupo no debe ser el grupo principal de ningún usuario.",
      "El grupo debe estar vacío de usuarios.",
      "Ambas A y B son condiciones que se deben cumplir.",
      "Ninguna, se puede eliminar directamente."
    ],
    correct: [2]
  },
  {
    question: "¿Qué comando cambia el grupo principal de un usuario en Linux?",
    answers: [
      "usermod -g otro_grupo nombre_usuario",
      "groupmod -g otro_grupo nombre_usuario",
      "userdel -g otro_grupo nombre_usuario",
      "gpasswd -g otro_grupo nombre_usuario"
    ],
    correct: [0]
  },
  {
    question: "¿Cómo comprobar si un grupo ha sido eliminado correctamente del sistema Linux?",
    answers: [
      "Ejecutar groupadd nombre_grupo y ver si da error.",
      "Buscar el grupo en /etc/group con grep.",
      "Intentar asignar ese grupo a un usuario.",
      "Buscar el GID del grupo."
    ],
    correct: [1]
  },
  {
    question: "¿Qué letra representa un directorio en la salida de ls -l?",
    answers: [
      "-",
      "l",
      "d",
      "b"
    ],
    correct: [2]
  },
  {
    question: "¿Qué letra representa un enlace simbólico en la salida de ls -l?",
    answers: [
      "-",
      "l",
      "d",
      "b"
    ],
    correct: [1]
  },
  {
    question: "¿A quién representan los tres primeros caracteres tras el tipo de archivo en los permisos?",
    answers: [
      "Al grupo propietario",
      "Al propietario del archivo/directorio",
      "Al resto de usuarios (otros)",
      "A todos los usuarios"
    ],
    correct: [1]
  },
  {
    question: "¿Qué permiso necesitas para ver los archivos en un directorio con ls?",
    answers: [
      "Escritura (w)",
      "Ejecución (x)",
      "Lectura (r)",
      "Ninguno"
    ],
    correct: [2]
  },
  {
    question: "¿Qué permiso necesitas para usar cd y entrar a un directorio?",
    answers: [
      "Lectura (r)",
      "Escritura (w)",
      "Ejecución (x)",
      "Todos (rwx)"
    ],
    correct: [2]
  },
  {
    question: "¿Qué permiso permite crear archivos dentro de un directorio?",
    answers: [
      "Lectura (r)",
      "Escritura (w)",
      "Ejecución (x)",
      "Ninguno"
    ],
    correct: [1]
  },
  {
    question: "¿Quiénes pueden cambiar los permisos de un archivo o directorio en Linux?",
    answers: [
      "Cualquier usuario del sistema.",
      "Solo el usuario root.",
      "El usuario propietario del archivo y el usuario root.",
      "El propietario y los usuarios del grupo propietario."
    ],
    correct: [2]
  },
  {
    question: "¿Qué valor octal representa el permiso de lectura (r) en Linux?",
    answers: [
      "1",
      "2",
      "4",
      "7"
    ],
    correct: [2]
  },
  {
    question: "¿Qué número octal representa los permisos -rwxr-x---?",
    answers: [
      "750",
      "764",
      "421",
      "110"
    ],
    correct: [0]
  },
  {
    question: "¿Qué letra representa al propietario del archivo en la notación simbólica de permisos?",
    answers: [
      "g",
      "o",
      "a",
      "u"
    ],
    correct: [3]
  },
  {
    question: "¿Qué opción usarías con chmod para dar lectura y escritura al grupo propietario?",
    answers: [
      "g+rw",
      "u+rw",
      "o+rw",
      "a+rw"
    ],
    correct: [0]
  },
  {
    question: "¿Qué comando se usa para cambiar el usuario y grupo propietario de un archivo?",
    answers: [
      "chmod",
      "chown",
      "chgrp",
      "usermod"
    ],
    correct: [1]
  },
  {
    question: "¿Qué es un script en Bash?",
    answers: [
      "Un programa compilado en C.",
      "Un ejecutable binario.",
      "Un archivo de texto con comandos en Bash.",
      "Una aplicación gráfica para administración."
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es la extensión común para scripts en Bash?",
    answers: [
      ".txt",
      ".exe",
      ".sh",
      ".bash"
    ],
    correct: [2]
  },
  {
    question: "¿Qué línea debe ir primero en un script Bash para indicar el intérprete?",
    answers: [
      "#!/bin/bash",
      "# A Shell Script",
      "bash",
      "execute /bin/bash"
    ],
    correct: [0]
  },
  {
    question: "¿Qué representan las líneas que comienzan con # en un script Bash?",
    answers: [
      "Comandos que se ejecutan primero.",
      "Variables del sistema.",
      "Comentarios que no se ejecutan.",
      "Errores de sintaxis."
    ],
    correct: [2]
  },
  {
    question: "¿Qué permiso necesita tener un script Bash para ejecutarlo directamente?",
    answers: [
      "Permiso de lectura (r)",
      "Permiso de escritura (w)",
      "Permiso de ejecución (x)",
      "Permiso de propietario (u)"
    ],
    correct: [2]
  },
  {
    question: "¿Qué comando otorga permisos de ejecución a un archivo en Linux?",
    answers: [
      "chmod rwx archivo.sh",
      "chmod +x archivo.sh",
      "chown +x archivo.sh",
      "execute archivo.sh"
    ],
    correct: [1]
  },
  {
    question: "¿Qué comando se usa en Bash para crear un directorio, incluyendo padres si es necesario?",
    answers: [
      "createdir",
      "mkdir -p",
      "builddir",
      "newdir"
    ],
    correct: [1]
  },
  {
    question: "¿Qué operador se usa con echo para sobrescribir el contenido de un archivo?",
    answers: [
      ">>",
      "<",
      "|",
      ">"
    ],
    correct: [3]
  },
  {
    question: "¿Qué operador se usa con echo para añadir texto al final de un archivo sin borrar su contenido?",
    answers: [
      ">",
      ">>",
      "<",
      "|"
    ],
    correct: [1]
  },
  {
    question: "Según la fuente, ¿de dónde deben estudiarse temas como administración de discos o procesos en Linux?",
    answers: [
      "Ejemplos del documento",
      "Un manual específico",
      "La ayuda de los comandos (man)",
      "Documentación en línea"
    ],
    correct: [1]
  },
  {
    question: "¿Cuál es la diferencia principal entre Clonación de discos y Copias de seguridad?",
    answers: [
      "La clonación solo copia archivos importantes.",
      "La clonación copia el disco completamente, incluyendo SO y configuraciones.",
      "La clonación es solo para Linux.",
      "La clonación usa herramientas de pago."
    ],
    correct: [1]
  },
  {
    question: "¿Qué método de respaldo crea una copia exacta del disco en un único archivo?",
    answers: [
      "Copia de seguridad simple",
      "Clonación de disco",
      "Creación de imagen de disco",
      "Copia incremental"
    ],
    correct: [2]
  },
  {
    question: "¿Qué herramienta gráfica basada en Ubuntu permite clonar y hacer copias de seguridad?",
    answers: [
      "Clonezilla",
      "Macrium Reflect",
      "Rescuezilla",
      "dd"
    ],
    correct: [2]
  },
  {
    question: "¿Para qué tareas sirve el comando dd en Linux?",
    answers: [
      "Copiar y convertir datos a nivel de bloque",
      "Crear imágenes de disco",
      "Borrar discos con ceros",
      "Todas las anteriores"
    ],
    correct: [3]
  },
  {
    question: "¿Qué comando dd en Linux se utiliza para clonar un disco completo (/dev/sda) a otro (/dev/sdb)?",
    answers: [
      "sudo dd if=/dev/sdb of=/dev/sda",
      "sudo dd if=/dev/sda of=/dev/sdb",
      "sudo dd of=/dev/sda if=/dev/sdb",
      "sudo dd clone /dev/sda /dev/sdb"
    ],
    correct: [1]
  },
  {
    question: "¿Qué hace el comando sudo dd if=/dev/zero of=/dev/sdb?",
    answers: [
      "Crea una imagen del disco",
      "Clona el disco a otro destino",
      "Borra completamente el disco escribiendo ceros",
      "Restaura una imagen del disco"
    ],
    correct: [2]
  },
  {
    question: "¿Cuál es la diferencia entre Cifrado de disco completo y Cifrado de archivos/carpetas?",
    answers: [
      "El cifrado de disco completo solo protege el sistema operativo",
      "El cifrado de disco completo protege todo el disco; el de archivos, solo algunos datos",
      "El cifrado de disco completo usa cifrado simétrico",
      "El cifrado de disco completo es solo para Windows"
    ],
    correct: [1]
  },
  {
    question: "¿Qué herramienta de cifrado en Windows se usa para cifrar discos completos?",
    answers: [
      "EFS",
      "AxCrypt",
      "BitLocker",
      "VeraCrypt"
    ],
    correct: [2]
  },
  {
    question: "¿Qué herramienta en Windows permite cifrar archivos individuales y funciona solo con NTFS?",
    answers: [
      "BitLocker",
      "EFS",
      "VeraCrypt",
      "AxCrypt"
    ],
    correct: [1]
  },
  {
    question: "¿Qué herramienta de cifrado nativa en Linux se menciona para cifrar discos completos?",
    answers: [
      "EFS",
      "LUKS",
      "BitLocker",
      "VeraCrypt"
    ],
    correct: [1]
  },
  {
    question: "¿Qué comando gpg se usa para cifrar un archivo usando cifrado simétrico?",
    answers: [
      "gpg -d secreto.txt",
      "gpg -c secreto.txt",
      "gpg -e secreto.txt",
      "gpg --encrypt secreto.txt"
    ],
    correct: [1]
  },
  {
    question: "¿Qué es un sistema RAID (Redundant Array of Inexpensive Disks)?",
    answers: [
      "Un sistema de archivos avanzado",
      "Una tecnología que combina varios discos en una unidad lógica",
      "Un protocolo de red para transferencias",
      "Una herramienta de particionamiento"
    ],
    correct: [1]
  },
  {
    question: "¿Cuáles son las dos formas principales de implementar RAID?",
    answers: [
      "RAID básico y avanzado",
      "RAID local y en la nube",
      "RAID por hardware y por software",
      "RAID de archivos y de bloques"
    ],
    correct: [2]
  },
  {
    question: "¿Qué se necesita para implementar RAID por hardware?",
    answers: [
      "Una controladora RAID física",
      "Un software especial instalado",
      "4 discos iguales",
      "Red de alta velocidad"
    ],
    correct: [0]
  },
  {
    question: "¿Qué herramienta en Linux se utiliza para gestionar RAID por software?",
    answers: [
      "LVM",
      "mdadm",
      "parted",
      "fdisk"
    ],
    correct: [1]
  },
  {
    question: "¿Cuál es una de las desventajas principales del RAID por software frente al RAID por hardware?",
    answers: [
      "Es más caro",
      "Consume recursos del sistema (CPU y RAM)",
      "Ofrece menos configuraciones",
      "La recuperación de datos es más compleja"
    ],
    correct: [1]
  },
  {
    question: "¿Qué nivel de RAID divide la información en bloques sin redundancia?",
    answers: [
      "RAID 0",
      "RAID 1",
      "RAID 5",
      "RAID 10"
    ],
    correct: [0]
  },
  {
    question: "¿Qué nivel de RAID copia la información en dos discos (mirroring)?",
    answers: [
      "RAID 0",
      "RAID 1",
      "RAID 5",
      "RAID 6"
    ],
    correct: [1]
  },
  {
    question: "¿Qué nivel de RAID necesita mínimo 3 discos y usa paridad?",
    answers: [
      "RAID 0",
      "RAID 1",
      "RAID 5",
      "RAID 10"
    ],
    correct: [2]
  },
  {
    question: "¿Qué nivel de RAID guarda información de doble paridad y requiere al menos 4 discos?",
    answers: [
      "RAID 0",
      "RAID 1",
      "RAID 6",
      "RAID 10"
    ],
    correct: [2]
  },
  {
    question: "¿Qué nivel de RAID combina striping y mirroring para alto rendimiento y seguridad?",
    answers: [
      "RAID 5",
      "RAID 6",
      "RAID 10",
      "RAID 50"
    ],
    correct: [2]
  },
  {
    question: "¿Qué tipo de respaldo guarda una copia exacta del disco, incluyendo SO, archivos y configuraciones, como un único archivo?",
    answers: [
      "Copia de seguridad simple",
      "Clonación de disco",
      "Imagen de disco",
      "Copia incremental"
    ],
    correct: [2]
  },
  {
    question: "¿Qué herramienta basada en Ubuntu se menciona para clonar, restaurar e imágenes de forma gráfica?",
    answers: [
      "Clonezilla",
      "Macrium Reflect",
      "Rescuezilla",
      "dd"
    ],
    correct: [2]
  },
  {
    question: "¿Qué tareas puede realizar el comando dd en Linux?",
    answers: [
      "Copiar y clonar a nivel de bloque",
      "Crear imágenes",
      "Borrar discos escribiendo ceros",
      "Todas las anteriores"
    ],
    correct: [3]
  }
];
